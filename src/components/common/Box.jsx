import React, {useContext} from 'react';
import {View, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {ThemeContext, theme} from 'src/constants/theme-context';

// interface BoxProps extends React.ComponentProps<typeof View> {
//   padding?: keyof typeof theme.spacing
//   margin?: keyof typeof theme.spacing
//   backgroundColor?: keyof typeof theme.colors
// }

const getBreakpointForScreenSize = ({theme, dimensions}) => {
  const sortedBreakpoints = Object.entries(theme.breakpoints).sort(
    (valA, valB) => {
      return valA[1] - valB[1];
    },
  );

  return sortedBreakpoints.reduce((acc, [breakpoint, minWidth]) => {
    if (dimensions.width >= minWidth) return breakpoint;
    return acc;
  }, null);
};

const getResponsiveValue = ({value, dimensions, theme}) => {
  if (typeof value === 'object') {
    return value[getBreakpointForScreenSize({theme, dimensions})];
  }
  return value;
};

export const Box = ({style, padding, margin, backgroundColor, ...rest}) => {
  const theme = useContext(ThemeContext);
  const dimensions = Dimensions.get('window');

  return (
    <View
      style={{
        margin:
          theme.spacing[getResponsiveValue({value: margin, dimensions, theme})],
        padding:
          theme.spacing[
            getResponsiveValue({value: padding, dimensions, theme})
          ],
        backgroundColor:
          theme.colors[
            getResponsiveValue({value: backgroundColor, dimensions, theme})
          ],
        ...style,
      }}
      {...rest}
    />
  );
};
