import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ThemeContext} from '@Constants';

// interface TextProps extends React.ComponentProps<typeof RNText> {
//     variant?: keyof typeof theme.textVariants
//     color?: keyof typeof theme.colors
//   }

export const RNText = ({style, variant, color, ...rest}) => {
  const theme = useContext(ThemeContext);

  return (
    <Text
      style={{
        color: theme.colors[color],
        ...theme.textVariants[variant],
        ...style,
      }}
      {...rest}
    />
  );
};
