import type { ViewProps } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
} from 'styled-system';

export type BoxProps = BorderProps &
  ColorProps &
  FlexboxProps &
  SpaceProps &
  ViewProps & {
    gap?: string;
  };
