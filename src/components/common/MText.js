import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

import {STYLES} from '@Constants';

const MText = ({type, children, style, light, dark, align, bold, ...props}) => {
  return (
    <Text
      style={[
        s.defaultText,
        s[type],
        light && s.light,
        dark && s.dark,
        {textAlign: align},
        style,
        // {
        //   // fontFamily: bold ? 'IRANSansMobile-Bold' : 'IRANSansMobile',
        // },
      ]}
      {...props}>
      {children}
    </Text>
  );
};

const s = StyleSheet.create({
  defaultText: {
    // fontFamily: STYLES.Fonts.first,
    fontSize: 16,
    color: STYLES.Color.second,
  },
  heading1: {
    color: STYLES.Color.first,
    // fontFamily: STYLES.Fonts.heading,
    fontSize: 22,
  },
  heading2: {
    color: STYLES.Color.first,
    // fontFamily: STYLES.Fonts.heading,
    fontSize: 20,
  },
  heading3: {
    color: STYLES.Color.dark,
    // fontFamily: STYLES.Fonts.second,
    fontSize: 18,
  },
  heading4: {
    color: STYLES.Color.dark,
    // fontFamily: STYLES.Fonts.second,
  },
  heading5: {
    color: STYLES.Color.dark,
    // fontFamily: STYLES.Fonts.second,
    fontSize: 14,
  },
  span: {
    color: STYLES.Color.third,
    fontSize: 13,
    // fontFamily: STYLES.Fonts.third,
  },
  mini: {
    color: STYLES.Color.third,
    fontSize: 12,
    // fontFamily: STYLES.Fonts.third,
  },
  paragraph1: {
    fontSize: 14,
  },
  paragraph2: {
    fontSize: 18,
  },
  light: {
    color: STYLES.Color.light,
  },
  dark: {
    color: STYLES.Color.first,
  },
});

MText.propTypes = {
  type: PropTypes.oneOf([
    'heading1',
    'heading2',
    'heading3',
    'heading4',
    'heading5',
    'span',
    'paragraph1',
    'paragraph2',
    'mini',
  ]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  align: PropTypes.oneOf(['right', 'center', 'left', 'justify']),
};

MText.defaultProps = {
  align: 'right',
};

export {MText};
