import React, {FC, ReactNode, useContext} from 'react';
import {View, ViewStyle} from 'react-native';
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
  iconContainer: ViewStyle
  value: string,
  style: ViewStyle,
  Icon: ReactNode,
  onChange: (myArgument: string) => void;
}

const Picker: FC<PickerProps> = ({style, placeholder, margin, backgroundColor ,items, onChange, Icon, iconContainer,  ...rest}) => {

  return (
    <Box backgroundColor={backgroundColor} style={style} margin={margin}>
         <RNPickerSelect 
            Icon={Icon}
            placeholder={placeholder}
            style={{viewContainer:{width: '100%', height: '100%'}, iconContainer}}
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