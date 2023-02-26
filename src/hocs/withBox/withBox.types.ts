import type { BoxProps } from '@components';

export type ComponentProps<T> = T & {
  box?: BoxProps;
};
