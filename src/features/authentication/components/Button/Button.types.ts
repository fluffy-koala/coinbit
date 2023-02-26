import type { TouchableHighlightProps } from 'react-native';
import type { DefaultTheme } from 'styled-components/native';
import type { ColorProps } from 'styled-system';

export type ButtonProps = Pick<
  StyledTouchableHighlightProps,
  'disabled' | 'onPress' | 'variant'
> & {
  text: string;
};

export type StyledTouchableHighlightProps = ColorProps &
  TouchableHighlightProps & {
    variant: keyof DefaultTheme['variant']['button'];
  };
