import React, {FC, useContext} from 'react';
import {View, Dimensions, ViewStyle} from 'react-native';
import {theme, getSpacing, ThemeContext, Spacing, ResponsiveValue} from '@Theme';

interface BoxProps extends React.ComponentProps<typeof View> {
  padding?: keyof Spacing | ResponsiveValue
  margin?: keyof Spacing | ResponsiveValue
  backgroundColor: keyof typeof theme.colors
  style: ViewStyle
}

const Box: FC<BoxProps> = ({style, padding, margin, backgroundColor , ...rest}) => {
  const theme = useContext(ThemeContext);

  return (
    <View
      style={{
        margin: getSpacing(margin!, theme),
        padding: getSpacing(padding!, theme),
        backgroundColor: theme.colors[backgroundColor],
        ...style,
      }}
      {...rest}
    />
  );
};

Box.defaultProps = {
  margin: 'default' as keyof Spacing,
  padding: 'default' as keyof Spacing
}
export {Box}