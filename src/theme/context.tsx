import React from 'react';
import {Theme, ThemeModes} from './interfaces';

const palette = {
    purple: '#5A31F4',
    green: '#0ECD9D',
    red: '#CD0E61',
    black: '#0B0B0B',
    white: '#F0F2F3',
    grey: '#808080',
};

export const theme: Theme = {
    colors: {
        background: palette.white,
        foreground: palette.black,
        primary: palette.green,
        disabled: palette.grey,
        success: palette.green,
        danger: palette.red,
        failure: palette.red,
        text: palette.black,
    },
    spacing: {
        default: 0,
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    iconSize: {
        s: 8,
        m: 16,
        l: 24,
        xl: 32,
        xxl: 40,
    },
    breakpoints: {
        smallPhone: 0,
        phone: 321,
        tablet: 768,
    },
    buttonVariants: {
        primary: {bgColor: palette.green},
        secondry: {bgColor: palette.white},
        disabled: {bgColor: palette.grey},
    },
    textVariants: {
        header: {
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'bold',
        },
        body: {
            fontFamily: 'Arial',
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
            imageTransfor: {transform: [{scaleX: -1}]},
        },
        ltr: {
            ...theme,
            colors: {
                ...theme.colors,
            },
            imageTransfor: {transform: [{scaleX: 1}]},
        },
    },
    dark: {
        rtl: {
            ...theme,
            colors: {
                ...theme.colors,
            },
        },
        ltr: {
            ...theme,
            colors: {
                ...theme.colors,
            },
        },
    },
};

export const ThemeContext = React.createContext({
    theme: themes.light.rtl,
    direction: 'ltr',
    themeMode: 'light',
});
