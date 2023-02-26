import { Screen } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import type { FC } from 'react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { SignUpFormData } from '../../components';
import { Greeting, SignUpForm } from '../../components';
import type { AuthenticationStackScreenProps } from '../../navigation';
import { schema } from '../../utils';

const SignUp: FC<AuthenticationStackScreenProps<'SignUp'>> = ({
  navigation,
}) => {
  const formMethods = useForm<SignUpFormData>({
    defaultValues: {
      confirmedPassword: undefined,
      email: undefined,
      password: undefined,
    },
    mode: 'onChange',
    resolver: yupResolver(schema.signUpForm),
  });

  const handleSignInButtonPress = () => {
    navigation.replace('SignIn');
  };

  const handleSignUpButtonPress = formMethods.handleSubmit(() => {});

  return (
    <Screen isScrollable>
      <Greeting
        box={{ marginBottom: '52px' }}
        subtitle="Please create a new account"
        title="Welcome"
      />
      <FormProvider {...formMethods}>
        <SignUpForm
          onSignInButtonPress={handleSignInButtonPress}
          onSignUpButtonPress={handleSignUpButtonPress}
        />
      </FormProvider>
    </Screen>
  );
};

export default SignUp;
