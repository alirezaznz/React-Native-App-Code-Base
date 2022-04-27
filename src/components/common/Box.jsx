import React, {useContext} from 'react';
import {View, Dimensions} from 'react-native';
import {ThemeContext, theme} from '@Constants';

const getBreakpointForScreenSize = ({theme, dimensions}) => {
  const sortedBreakpoints = Object.entries(theme.breakpoints).sort(
    (valA, valB) => {
      return valA[1] - valB[1];
    },
  );
  const x = sortedBreakpoints.reduce((acc, [breakpoint, minWidth]) => {
    if (dimensions.width >= minWidth) return breakpoint;
    return acc;
  }, null);
  debugger;
  return x;
};

const getResponsiveValue = ({value, dimensions, theme}) => {
  if (typeof value === 'object') {
    debugger;
    const br = getBreakpointForScreenSize({theme, dimensions});
    const val = value[br];
    return val;
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
        backgroundColor: theme.colors[backgroundColor],
        ...style,
      }}
      {...rest}
    />
  );
};
