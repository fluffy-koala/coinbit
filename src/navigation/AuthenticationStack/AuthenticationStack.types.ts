import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { AppStackParamsList } from '../AppStack';

export type AuthenticationStackParamsList = {
  SignIn: undefined;
};

export type AuthenticationStackScreenProps<
  T extends keyof AuthenticationStackParamsList,
> = CompositeScreenProps<
  NativeStackScreenProps<AuthenticationStackParamsList, T>,
  NativeStackScreenProps<AppStackParamsList>
>;
