import { ScaledSize } from "react-native"

export interface Color {
    background: string,
    foreground: string,
    primary: string,
    success: string,
    danger: string,
    failure: string,
  }
  
export interface Spacing{
    default: number,
      s: number,
      m: number,
      l: number,
      xl: number,
  }
  
export interface Header{
    fontFamily: string,
    fontSize: 36,
    fontWeight: number|string,
  }
  
export interface Body {
    fontFamily: string,
    fontSize: number,
  }
  
  
export interface TextVariants{
      header: Header,
      body: Body
  }
  
export interface BreakPoints{
    smallPhone: number,
    phone: number,
    tablet: number,
}

export interface ResponsiveValue{
  smallPhone: keyof Spacing,
  phone: keyof Spacing,
  tablet: keyof Spacing,
}
  
  export interface Theme {
    colors: Color,
    spacing: Spacing,
    textVariants: TextVariants,
    breakpoints: BreakPoints
    imageTransfor: {}
  }
  
  export interface ThemeModes {
    light: Theme,
    dark: Theme
  }
