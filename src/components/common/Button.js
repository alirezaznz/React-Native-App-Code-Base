import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {Touchable} from './Touchable';
// @ts-ignore
import {STYLES} from '@Constants';
import {MText} from './MText';
// import {MIcon} from './MIcon';
// import {ShadowBox} from './ShadowBox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({
  disabled,
  disabledColor,
  loading,
  onPress,
  style,
  type,
  icon,
  iconSize,
  title,
  width,
  radius = 5,
  height,
  mainColor,
  titleType,
  textStyle = {},
  materialIcon,
  bold = false,
}) => {
  let children = null;
  let customStyle = {};

  switch (type) {
    default:
    case 'primary':
      // eslint-disable-next-line no-case-declarations
      const color = disabled
        ? disabledColor
          ? disabledColor
          : STYLES.Color.pureGrey
        : mainColor || STYLES.Color.primary;
      children = (
        <View
          height={height}
          width={width}
          backgroundColor={color}
          radius={radius}
          shadowColor={color}>
          <View style={[s.center, s.primaryStyle]}>
            {loading ? (
              <ActivityIndicator color={STYLES.Color.light} size={'small'} />
            ) : (
              <React.Fragment>
                {materialIcon && (
                  <Icon
                    name={materialIcon}
                    size={iconSize}
                    style={s.primaryIcon}
                  />
                )}
                {/* {icon && (
                  <MIcon name={icon} size={iconSize} style={s.primaryIcon} />
                )} */}
                {title && (
                  <MText
                    {...{bold}}
                    type={titleType}
                    style={{...s.primaryTitle, ...textStyle}}>
                    {title}
                  </MText>
                )}
              </React.Fragment>
            )}
          </View>
        </View>
      );
      break;
  }

  return (
    <Touchable
      disabled={disabled || loading}
      loading={loading}
      onPress={onPress}
      type="opacity"
      style={[customStyle, style]}>
      {children}
    </Touchable>
  );
};

const s = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  primaryStyle: {
    flex: 1,
  },
  primaryIcon: {
    marginHorizontal: 5,
    color: STYLES.Color.light,
  },
  primaryTitle: {
    marginHorizontal: 5,
    color: STYLES.Color.light,
  },
});

Button.propTypes = {
  type: PropTypes.oneOf(['primary']),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  icon: PropTypes.string,
  mainColor: PropTypes.string,
  titleType: PropTypes.string,
  iconSize: PropTypes.number,
  onPress: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

Button.defaultProps = {
  style: {},
  type: 'primary',
  iconSize: 16,
  height: 45,
  width: 200,
  onPress: () => false,
  loading: false,
  disabled: false,
  titleType: 'heading4',
};

export {Button};
