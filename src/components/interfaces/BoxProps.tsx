import {theme} from '@Constants';
import {View} from 'react-native';

export interface BoxProps extends React.ComponentProps<typeof View> {
  padding?: keyof typeof theme.spacing
  margin?: keyof typeof theme.spacing
  backgroundColor?: keyof typeof theme.colors
}