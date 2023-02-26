import type { AppStackParamsList } from '@navigation';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthenticationStackParamsList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthenticationStackScreenProps<
  T extends keyof AuthenticationStackParamsList,
> = CompositeScreenProps<
  NativeStackScreenProps<AuthenticationStackParamsList, T>,
  NativeStackScreenProps<AppStackParamsList>
>;
