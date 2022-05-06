import React from 'react';
import {
    CommonTheme,
    Theme,
    ThemeDirections,
    ThemeLanguages,
    ThemeModes,
} from './interfaces';

const palette = {
    purple: '#5A31F4',
    green: '#0ECD9D',
    red: '#CD0E61',
    black: '#0B0B0B',
    white: '#F0F2F3',
    grey: '#808080',
};

export const commonTheme: CommonTheme = {
    spacing: {
        default: 0,
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    size: {
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
};

export const themeLanguages: ThemeLanguages = {
    en: {
        header: {
            fontFamily: 'IRANSansMobile-Bold',
            fontSize: 36,
        },
        body: {
            fontFamily: 'IRANSansMobile',
            fontSize: 16,
        },
    },
    fa: {
        header: {
            fontFamily: 'IRANSansMobile-Bold',
            fontSize: 36,
        },
        body: {
            fontFamily: 'IRANSansMobile',
            fontSize: 16,
        },
    },
    tr: {
        header: {
            fontFamily: 'IRANSansMobile-Bold',
            fontSize: 36,
        },
        body: {
            fontFamily: 'IRANSansMobile',
            fontSize: 16,
        },
    },
};

export const themeDirections: ThemeDirections = {
    rtl: {
        imageTransform: {transform: [{scaleX: -1}]},
    },
    ltr: {
        imageTransform: {transform: [{scaleX: 1}]},
    },
};

export const themeModes: ThemeModes = {
    dark: {
        colors: {
            background: palette.white,
            foreground: palette.black,
            primary: palette.green,
            success: palette.green,
            danger: palette.red,
            failure: palette.red,
            text: palette.black,
        },
        buttonVariants: {
            primary: {bgColor: palette.green, color: palette.white},
            secondry: {bgColor: palette.white, color: palette.black},
            disabled: {bgColor: palette.grey, color: palette.white},
        },
    },
    light: {
        colors: {
            background: palette.white,
            foreground: palette.black,
            primary: palette.green,
            success: palette.green,
            danger: palette.red,
            failure: palette.red,
            text: palette.black,
        },
        buttonVariants: {
            primary: {bgColor: palette.green, color: palette.white},
            secondry: {bgColor: palette.white, color: palette.black},
            disabled: {bgColor: palette.grey, color: palette.white},
        },
    },
};

const theme: Theme = {
    ...commonTheme,
    ...themeModes.light,
    textVariants: {
        header: {
            color: themeModes.light.colors.foreground,
            fontFamily: 'IRANSansMobile-Bold',
            fontSize: 36,
        },
        body: {
            color: themeModes.light.colors.foreground,
            fontFamily: 'IRANSansMobile',
            fontSize: 16,
        },
    },
    ...themeDirections.ltr,
};

export {theme};

export const ThemeContext = React.createContext({
    theme,
    direction: 'ltr',
    themeMode: 'light',
});
