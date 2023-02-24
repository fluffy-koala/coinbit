import type { TextProps } from 'react-native';
import type { DefaultTheme } from 'styled-components/native';
import type {
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export type ParagraphProps = ColorProps &
  FlexboxProps &
  SpaceProps &
  TextProps &
  TypographyProps & {
    variant: keyof DefaultTheme['variant']['typography'];
  };
