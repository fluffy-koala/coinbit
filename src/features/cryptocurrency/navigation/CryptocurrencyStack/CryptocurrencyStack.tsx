import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { CoinSearch } from '../../screens';
import type { CryptocurrencyStackParamsList } from './CryptocurrencyStack.types';

const Stack = createNativeStackNavigator<CryptocurrencyStackParamsList>();

const CryptocurrencyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CoinSearch"
      screenOptions={{
        animation: 'slide_from_right',
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Stack.Screen component={CoinSearch} name="CoinSearch" />
    </Stack.Navigator>
  );
};

export default CryptocurrencyStack;
