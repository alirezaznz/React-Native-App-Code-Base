import React, {FC} from 'react';
import {
    NativeSyntheticEvent,
    StyleSheet,
    TextInput,
    TextInputFocusEventData,
    TextInputProps,
} from 'react-native';

interface InputProps extends TextInputProps {}

const RNInput: FC<InputProps> = ({
    onChangeText,
    value,
    onBlur,
    onFocus,
    placeholder,
    keyboardType,
    style,
}) => {
    const handleOnChangeText = (val: string) => {
        onChangeText?.(val);
    };

    const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur?.(e);
    };

    const handleOnFocus = (
        e: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
        onFocus?.(e);
    };

    return (
        <TextInput
            keyboardType={keyboardType}
            placeholder={placeholder}
            style={[styles.input, style]}
            value={value}
            onChangeText={handleOnChangeText}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
        />
    );
};

const styles = StyleSheet.create({
    input: {},
});

export {RNInput};
