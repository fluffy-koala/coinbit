import { withBox } from '@hocs';
import type { FC } from 'react';
import React from 'react';
import { useFormState } from 'react-hook-form';

import { Button } from '../Button';
import { Input } from '../Input';
import type { SignUpFormData, SignUpFormProps } from './SignUpForm.types';

const SignUpForm: FC<SignUpFormProps> = ({
  onSignInButtonPress,
  onSignUpButtonPress,
}) => {
  const { isValid } = useFormState<SignUpFormData>();

  return (
    <>
      <Input<SignUpFormData>
        box={{ marginBottom: '24px' }}
        keyboardType="email-address"
        name="email"
        placeholder="Email"
      />
      <Input<SignUpFormData>
        box={{ marginBottom: '24px' }}
        name="password"
        placeholder="Password"
        withSecuredTextEntry
      />
      <Input<SignUpFormData>
        box={{ marginBottom: '52px' }}
        name="confirmedPassword"
        placeholder="Confirm Password"
        withSecuredTextEntry
      />
      <Button
        box={{ marginBottom: '12px' }}
        disabled={!isValid}
        onPress={onSignUpButtonPress}
        text="Sign Up"
        variant="primary"
      />
      <Button
        onPress={onSignInButtonPress}
        text="Have an account? Sign In"
        variant="secondary"
      />
    </>
  );
};

export default withBox(SignUpForm);
