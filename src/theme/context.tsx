import React from 'react';
import { Theme, ThemeModes } from './interfaces';
import {I18nManager} from "react-native"

const palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: '#F0F2F3',
};

export const theme: Theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
  },
  spacing: {
    default: 0,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    smallPhone: 0,
    phone: 321,
    tablet: 768,
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
  },

};

export const themes: ThemeModes = {
  light: {
    rtl: {
      ...theme,
      colors: {
        ...theme.colors,
      },
      imageTransfor: {transform: [{scaleX: -1 }]}
    },
    ltr: {
      ...theme,
      colors: {
        ...theme.colors,
      },
      imageTransfor: {transform: [{scaleX: 1 }]}
    },
  },
  dark: {
    rtl: {
      ...theme,
      colors: {
        ...theme.colors,
      }
    },
    ltr: {
      ...theme,
      colors: {
        ...theme.colors,
      }
  }
}}

export const ThemeContext = React.createContext({theme: themes.light.rtl, direction: "ltr", themeMode: "light"});
