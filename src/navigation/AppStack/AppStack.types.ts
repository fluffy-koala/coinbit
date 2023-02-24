import type { NavigatorScreenParams } from '@react-navigation/native';

import type { AuthenticationStackParamsList } from '../AuthenticationStack';

export type AppStackParamsList = {
  AuthenticationStack: NavigatorScreenParams<AuthenticationStackParamsList>;
};
