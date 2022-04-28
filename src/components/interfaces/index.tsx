import {theme} from '@Constants';
import {Button, ScaledSize, TextInput, View, ViewStyle} from 'react-native';
import {  MouseEventHandler } from "react"
import { ChangeEventHandler } from "react"

export interface BoxProps extends React.ComponentProps<typeof View> {
  padding?: keyof typeof theme.spacing
  margin?: keyof typeof theme.spacing
  backgroundColor: keyof typeof theme.colors
  style: ViewStyle
}

export interface ButtonProps extends React.ComponentProps<typeof Button>{
    text?: string
    primary?:boolean
    disabled?: boolean
    size?: "small" | "medium" | "large",
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface InputProps extends React.ComponentProps<typeof TextInput>{
    id?: string
    label?: string
    error?:boolean
    message?: string
    success?:boolean
    disabled?: boolean
    placeholder?:string
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export interface GetBreakpointForScreenSizeProps{
    dimensions: ScaledSize,
    theme: typeof theme
}

export interface ResponsiveValueProps extends GetBreakpointForScreenSizeProps{
    value?: keyof typeof theme.spacing
  }