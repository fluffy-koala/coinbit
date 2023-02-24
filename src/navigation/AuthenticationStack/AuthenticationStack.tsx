import { SignIn } from '@features/authentication';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import type { AuthenticationStackParamsList } from './AuthenticationStack.types';

const Stack = createNativeStackNavigator<AuthenticationStackParamsList>();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        animation: 'slide_from_right',
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Stack.Screen component={SignIn} name="SignIn" />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
