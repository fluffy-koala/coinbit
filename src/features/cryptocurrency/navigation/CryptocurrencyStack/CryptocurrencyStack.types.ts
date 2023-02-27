import type { AppStackParamsList } from '@navigation';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type CryptocurrencyStackParamsList = {
  CoinSearch: undefined;
};

export type CryptocurrencyStackScreenProps<
  T extends keyof CryptocurrencyStackParamsList,
> = CompositeScreenProps<
  NativeStackScreenProps<CryptocurrencyStackParamsList, T>,
  NativeStackScreenProps<AppStackParamsList>
>;
