import {
  authenticationSelector,
  AuthenticationStack,
} from '@features/authentication';
import { CryptocurrencyStack } from '@features/cryptocurrency';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '@store';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import type { AppStackParamsList } from './AppStack.types';

const Stack = createNativeStackNavigator<AppStackParamsList>();

const AppStack = () => {
  const isSignedIn = useAppSelector(authenticationSelector.selectIsSignedIn);

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
      {isSignedIn ? (
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
