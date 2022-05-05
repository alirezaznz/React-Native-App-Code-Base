import {ThemeContext} from '@Theme';
import React, {FC, useContext} from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {RNText} from './RNText';

export enum Type {
    Primary,
    Secondry,
    Disabled,
}
// const typeBg = {
//     [Type.Primary]: theme.buttonVariants.primary.bgColor
// }
interface ButtonProps extends React.ComponentProps<typeof TouchableOpacity> {
    title: string;
    type: Type;
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

    function typeColor(): ViewStyle {
        switch (type) {
            case Type.Primary:
                return {backgroundColor: theme.buttonVariants.primary.bgColor};
            case Type.Secondry:
                return {backgroundColor: theme.buttonVariants.secondry.bgColor};
            case Type.Disabled:
                return {backgroundColor: theme.buttonVariants.disabled.bgColor};
            default:
                return {backgroundColor: theme.buttonVariants.disabled.bgColor};
        }
    }

    return (
        <TouchableOpacity
            style={[
                typeColor as StyleProp<ViewStyle>,
                {justifyContent: 'center', alignItems: 'center'},
                style,
            ]}
            onPress={onPress}>
            <RNText style={textStyle}>{title}</RNText>
        </TouchableOpacity>
    );
};

export {RNButton};
