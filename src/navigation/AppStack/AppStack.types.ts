import type { AuthenticationStackParamsList } from '@features/authentication';
import type { NavigatorScreenParams } from '@react-navigation/native';

export type AppStackParamsList = {
  AuthenticationStack: NavigatorScreenParams<AuthenticationStackParamsList>;
};
