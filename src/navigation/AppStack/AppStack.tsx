import { AuthenticationStack } from '@features/authentication';
import { CryptocurrencyStack } from '@features/cryptocurrency';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import type { AppStackParamsList } from './AppStack.types';

const Stack = createNativeStackNavigator<AppStackParamsList>();

const isAuthenticated = true;

const AppStack = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'none',
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        <Stack.Screen
          component={CryptocurrencyStack}
          name="CryptocurrencyStack"
        />
      ) : (
        <Stack.Screen
          component={AuthenticationStack}
          name="AuthenticationStack"
        />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
