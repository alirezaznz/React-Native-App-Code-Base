import React, {FC, useContext} from 'react';
import {View, Dimensions, ViewStyle} from 'react-native';
import {theme, getSpacing, ThemeContext, Spacing, ResponsiveValue} from '@Theme';

interface BoxProps extends React.ComponentProps<typeof View> {
  padding?: keyof Spacing | ResponsiveValue
  margin?: keyof Spacing | ResponsiveValue
  backgroundColor: keyof typeof theme.colors
  style: ViewStyle,
  children: React.ReactNode
}

const Box: FC<BoxProps> = ({style, padding, margin, backgroundColor ,children, ...rest}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={{
        margin: getSpacing(margin!, theme),
        padding: getSpacing(padding!, theme),
        backgroundColor: theme.colors[backgroundColor],
        ...style,
      }}
      {...rest}
    >
      {children}
      </View>
  );
};

Box.defaultProps = {
  margin: 'default' as keyof Spacing,
  padding: 'default' as keyof Spacing
}
export {Box}