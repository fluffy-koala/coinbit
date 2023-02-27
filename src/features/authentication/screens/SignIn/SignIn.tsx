import { Screen } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@store';
import type { FC } from 'react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { SignInFormData } from '../../components';
import { Greeting, SignInForm } from '../../components';
import type { AuthenticationStackScreenProps } from '../../navigation';
import { authenticationSlice } from '../../store';
import { schema } from '../../utils';

const SignIn: FC<AuthenticationStackScreenProps<'SignIn'>> = ({
  navigation,
}) => {
  const formMethods = useForm<SignInFormData>({
    defaultValues: {
      email: undefined,
      password: undefined,
    },
    mode: 'onChange',
    resolver: yupResolver(schema.signInForm),
  });

  const dispatch = useAppDispatch();

  const handleSignInButtonPress = formMethods.handleSubmit(() => {
    dispatch(authenticationSlice.actions.signIn());
  });

  const handleSignUpButtonPress = () => {
    navigation.replace('SignUp');
  };

  return (
    <Screen isScrollable>
      <Greeting
        box={{ marginBottom: '52px' }}
        subtitle="Please sign in to your account"
        title="Welcome"
      />
      <FormProvider {...formMethods}>
        <SignInForm
          onSignInButtonPress={handleSignInButtonPress}
          onSignUpButtonPress={handleSignUpButtonPress}
        />
      </FormProvider>
    </Screen>
  );
};

export default SignIn;
