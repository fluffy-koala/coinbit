import type { AuthenticationStackParamsList } from '@features/authentication';
import type { CryptocurrencyStackParamsList } from '@features/cryptocurrency';
import type { NavigatorScreenParams } from '@react-navigation/native';

export type AppStackParamsList = {
  AuthenticationStack: NavigatorScreenParams<AuthenticationStackParamsList>;
  CryptocurrencyStack: NavigatorScreenParams<CryptocurrencyStackParamsList>;
};
