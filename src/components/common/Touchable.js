import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

const Touchable = ({children, type, onPress, disabled, ...props}) => {
  let ButtonComponent = null,
    customProps = {};

  switch (type) {
    case 'opacity':
      ButtonComponent = TouchableOpacity;
      customProps = {
        activeOpacity: 0.85,
      };
      break;
    case 'native':
      if (Platform.OS === 'android') {
        ButtonComponent = TouchableNativeFeedback;
        customProps = {
          background: TouchableNativeFeedback.SelectableBackground(),
        };
      } else {
        ButtonComponent = TouchableWithoutFeedback;
      }
      break;
    case 'highlight':
      ButtonComponent = TouchableHighlight;
      break;
    default:
    case 'without':
      ButtonComponent = TouchableWithoutFeedback;
      break;
  }

  return (
    <ButtonComponent
      disabled={disabled}
      onPress={disabled ? () => false : onPress}
      {...{...customProps, ...props}}
    >
      {children}
    </ButtonComponent>
  );
};

Touchable.propTypes = {
  type: PropTypes.oneOf(['opacity', 'native', 'highlight', 'without']),
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

Touchable.defaultProps = {
  disabled: false,
  onPress: () => false,
};

export {Touchable};
