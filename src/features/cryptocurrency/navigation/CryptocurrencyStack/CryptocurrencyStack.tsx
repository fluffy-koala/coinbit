import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { CoinSearch, Watchlist } from '../../screens';
import type { CryptocurrencyStackParamsList } from './CryptocurrencyStack.types';

const Stack = createNativeStackNavigator<CryptocurrencyStackParamsList>();

const CryptocurrencyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Watchlist"
      screenOptions={{
        animation: 'slide_from_right',
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Stack.Screen component={CoinSearch} name="CoinSearch" />
      <Stack.Screen component={Watchlist} name="Watchlist" />
    </Stack.Navigator>
  );
};

export default CryptocurrencyStack;
