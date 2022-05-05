import React, {FC, ReactNode, useContext} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {Color, TextVariants, ThemeContext} from '@Theme';

interface TextProps extends React.ComponentProps<typeof Text> {
    variant?: keyof TextVariants;
    color?: keyof Color;
    children: ReactNode;
}

const RNText: FC<TextProps> = ({style, variant, color, children, ...rest}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <Text
            style={
                {
                    ...(style as object),
                    color: theme.colors[color ?? 'text'],
                    ...theme.textVariants[variant ?? 'body'],
                } as StyleProp<TextStyle>
            }
            {...rest}>
            {children}
        </Text>
    );
};

RNText.defaultProps = {
    color: 'text' as keyof Color,
    variant: 'body' as keyof TextVariants,
};
export {RNText};
