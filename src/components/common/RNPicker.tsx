import React, {FC, ReactNode, useContext} from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import {theme, Spacing, ResponsiveValue} from '@Theme';
import { Box } from './Box';
import RNPickerSelect from 'react-native-picker-select';

interface PickerProps extends React.ComponentProps<typeof View> {
  padding?: keyof Spacing | ResponsiveValue
  items: [{label: string, value: string}]
  margin?: keyof Spacing | ResponsiveValue
  backgroundColor: keyof typeof theme.colors,
  placeholder: 'string',
  disabled: boolean,
  value: string,
  Icon: ReactNode,
  style: ViewStyle,
  ContainerStyle: ViewStyle,
  pickerStyle: {
    inputIOSContainer?: ViewStyle
    inputAndroid: ViewStyle
    placeholder?: TextStyle
    chevronContainer?: ViewStyle
    chevron: ViewStyle
  },
  onChange: (myArgument: string) => void;
}

const Picker: FC<PickerProps> = ({pickerStyle, ContainerStyle, placeholder, margin, backgroundColor ,items, onChange, Icon, style,  ...rest}) => {

  return (
    <Box backgroundColor={backgroundColor} style={ContainerStyle} margin={margin}>
         <RNPickerSelect 
            Icon={Icon}
            placeholder={placeholder}
            style={{...pickerStyle, viewContainer:style}}
            pickerProps={{...rest}}
            onValueChange={onChange}
            items={items}
            />
        </Box>
  );
};

Picker.defaultProps = {
  margin: 'default' as keyof Spacing,
  padding: 'default' as keyof Spacing,
}
export {Picker}