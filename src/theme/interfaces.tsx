import {ColorValue} from 'react-native';

export interface Color {
    background: ColorValue;
    foreground: ColorValue;
    primary: ColorValue;
    success: ColorValue;
    danger: ColorValue;
    failure: ColorValue;
    text: ColorValue;
    disabled: ColorValue;
}

export interface Colors {
    light: Color;
    dark: Color;
}
export interface Spacing {
    default: number;
    s: number;
    m: number;
    l: number;
    xl: number;
}

export interface IconSize {
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
}

export interface Header {
    color?: ColorValue;
    fontFamily: string;
    fontSize: 36;
    // fontWeight: number | string;
}

export interface Body {
    color?: ColorValue;
    fontFamily: string;
    fontSize: number;
}

export interface ButtonVariants {
    primary: {bgColor: ColorValue; color: ColorValue};
    secondry: {bgColor: ColorValue; color: ColorValue};
    disabled: {bgColor: ColorValue; color: ColorValue};
}
export interface TextVariants {
    header: Header;
    body: Body;
}

export interface BreakPoints {
    smallPhone: number;
    phone: number;
    tablet: number;
}

export interface ResponsiveValue {
    smallPhone: keyof Spacing;
    phone: keyof Spacing;
    tablet: keyof Spacing;
}

export interface CommonTheme {
    spacing: Spacing;
    iconSize: IconSize;
    breakpoints: BreakPoints;
}

export interface ThemeModes {
    dark: {colors: Color; buttonVariants: ButtonVariants};
    light: {colors: Color; buttonVariants: ButtonVariants};
}
export interface ThemeLanguages {
    en: TextVariants;
    fa: TextVariants;
    tr: TextVariants;
}

export interface ThemeDirections {
    rtl: {
        imageTransform: object;
    };
    ltr: {
        imageTransform: object;
    };
}
export interface Theme {
    imageTransform: object;
    colors: Color;
    textVariants: TextVariants;
    spacing: Spacing;
    iconSize: IconSize;
    breakpoints: BreakPoints;
    buttonVariants: ButtonVariants;
}
