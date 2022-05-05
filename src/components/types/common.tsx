import {Button, TextInput} from 'react-native';
import React from 'react';
export interface ButtonProps extends React.ComponentProps<typeof Button> {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

export interface InputProps extends React.ComponentProps<typeof TextInput> {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
}
