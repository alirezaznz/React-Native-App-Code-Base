import {Dimensions} from 'react-native';
import {BreakPoints, Spacing, Theme, ResponsiveValue} from './interfaces';

const dimensions = Dimensions.get('window');

const getBreakpointForScreenSize = (theme: Theme): keyof BreakPoints => {
    const sortedBreakpoints = Object.entries(theme.breakpoints).sort(
        (valA, valB) => {
            return valA[1] - valB[1];
        },
    );
    const x: keyof BreakPoints = sortedBreakpoints.reduce(
        (acc, [breakpoint, minWidth]) => {
            if (dimensions.width >= minWidth)
                return breakpoint as keyof BreakPoints;
            return acc;
        },
        'xl' as keyof BreakPoints,
    );
    return x!;
};

const getResponsiveValue = (
    value: keyof Spacing | ResponsiveValue,
    theme: Theme,
): keyof Spacing => {
    if (typeof value === 'object') {
        const br = getBreakpointForScreenSize(theme);
        const val = value[br];
        return val;
    }
    return value!;
};

export const getSpacing = (
    value: keyof Spacing | ResponsiveValue,
    theme: Theme,
): number => {
    return theme.spacing[getResponsiveValue(value, theme)];
};
