import React from 'react';

const palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: '#F0F2F3',
};

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
    breakpoints: {
      s: 0,
      m: 321,
      l: 768,
      xl: 1028
    },
  },
};

export const themes = {
  light: {
    ...theme,
    colors: {
      ...theme.colors,
    },
  },
  dark: {
    ...theme,
    colors: {
      ...theme.colors,
      background: palette.black,
      foreground: palette.white,
    },
  },
};

export const ThemeContext = React.createContext(themes.light);
