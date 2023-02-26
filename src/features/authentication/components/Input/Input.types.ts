import type { Path } from 'react-hook-form';
import type { TextInputProps } from 'react-native';

export type InputProps<T> = Pick<
  TextInputProps,
  'keyboardType' | 'placeholder'
> & {
  name: Path<T>;
  withSecuredTextEntry?: boolean;
};
