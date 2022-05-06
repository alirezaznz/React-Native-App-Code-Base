import React, {FC, useContext} from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';
import {
    getSpacing,
    ThemeContext,
    Spacing,
    ResponsiveValue,
    Color,
} from '@Theme';

interface BoxProps extends React.ComponentProps<typeof View> {
    padding?: keyof Spacing | ResponsiveValue;
    margin?: keyof Spacing | ResponsiveValue;
    backgroundColor?: keyof Color;
}

const Box: FC<BoxProps> = ({
    style,
    padding,
    margin,
    backgroundColor,
    children,
    ...rest
}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <View
            style={
                {
                    margin: getSpacing(margin!, theme),
                    padding: getSpacing(padding!, theme),
                    backgroundColor: theme.colors[backgroundColor!],
                    ...(style as object),
                } as StyleProp<ViewStyle>
            }
            {...rest}>
            {children}
        </View>
    );
};

Box.defaultProps = {
    backgroundColor: 'background' as keyof Color,
    margin: 'default' as keyof Spacing,
    padding: 'default' as keyof Spacing,
};
export {Box};
