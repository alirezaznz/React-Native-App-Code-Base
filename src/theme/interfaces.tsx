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
    fontFamily: string;
    fontSize: 36;
    fontWeight: number | string;
}

export interface Body {
    fontFamily: string;
    fontSize: number;
}

export interface ButtonVariants {
    primary: {bgColor: ColorValue};
    secondry: {bgColor: ColorValue};
    disabled: {bgColor: ColorValue};
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

export interface Theme {
    colors: Color;
    spacing: Spacing;
    iconSize: IconSize;
    buttonVariants: ButtonVariants;
    textVariants: TextVariants;
    breakpoints: BreakPoints;
    imageTransfor?: {};
}

export interface ThemeModes {
    light: {
        ltr: Theme;
        rtl: Theme;
    };
    dark: {
        ltr: Theme;
        rtl: Theme;
    };
}
