import { Input } from '@components';
import { withBox } from '@hocs';
import type { FC } from 'react';
import React from 'react';
import { useFormState } from 'react-hook-form';

import { Button } from '../Button';
import type { SignInFormData, SignInFormProps } from './SignInForm.types';

const SignInForm: FC<SignInFormProps> = ({
  onSignInButtonPress,
  onSignUpButtonPress,
}) => {
  const { isValid } = useFormState<SignInFormData>();

  return (
    <>
      <Input<SignInFormData>
        box={{ marginBottom: '24px' }}
        keyboardType="email-address"
        name="email"
        placeholder="Email"
      />
      <Input<SignInFormData>
        box={{ marginBottom: '52px' }}
        name="password"
        placeholder="Password"
        withSecuredTextEntry
      />
      <Button
        box={{ marginBottom: '12px' }}
        disabled={!isValid}
        onPress={onSignInButtonPress}
        text="Sign In"
        variant="primary"
      />
      <Button
        onPress={onSignUpButtonPress}
        text="Need an account? Sign Up"
        variant="secondary"
      />
    </>
  );
};

export default withBox(SignInForm);
