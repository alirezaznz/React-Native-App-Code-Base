import {ButtonVariants, Color, Theme, ThemeContext} from '@Theme';
import React, {FC, useContext} from 'react';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {RNText} from './RNText';
interface ButtonProps extends React.ComponentProps<typeof TouchableOpacity> {
    title: string;
    type: keyof ButtonVariants;
    textStyle: TextStyle;
    color?: keyof Color;
}

const RNButton: FC<ButtonProps> = ({
    title,
    type,
    style,
    textStyle,
    color,
    onPress,
}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <TouchableOpacity
            style={[styles.container(theme, type), style]}
            onPress={onPress}>
            <RNText style={textStyle} color={color}>{title}</RNText>
        </TouchableOpacity>
    );
};

interface Styles {
    container: (theme: Theme, type: keyof ButtonVariants) => ViewStyle;
}

const styles: Styles = {
    container: (theme: Theme, type: keyof ButtonVariants): ViewStyle => ({
        backgroundColor: theme.buttonVariants[type].bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing.m,
        borderRadius: 12,
    }),
};

RNButton.defaultProps = {
    type: 'primary',
    color: 'background',
};

export {RNButton};
