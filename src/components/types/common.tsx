import {theme} from '@Theme';
import {Button, ScaledSize, TextInput, View, ViewStyle} from 'react-native';
import {  MouseEventHandler } from "react"
import { ChangeEventHandler } from "react"



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

