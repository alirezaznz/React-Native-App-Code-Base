import {ButtonVariants, Theme, ThemeContext} from '@Theme';
import React, {FC, useContext} from 'react';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {RNText} from './RNText';
interface ButtonProps extends React.ComponentProps<typeof TouchableOpacity> {
    title: string;
    type: keyof ButtonVariants;
    textStyle: TextStyle;
}

const RNButton: FC<ButtonProps> = ({
    title,
    type,
    style,
    textStyle,
    onPress,
}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <TouchableOpacity
            style={[styles.container(theme, type), style]}
            onPress={onPress}>
            <RNText style={textStyle}>{title}</RNText>
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
};

export {RNButton};
