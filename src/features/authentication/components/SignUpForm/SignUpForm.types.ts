export type SignUpFormProps = {
  onSignInButtonPress: () => void;
  onSignUpButtonPress: () => void;
};

export type SignUpFormData = {
  confirmedPassword: string;
  email: string;
  password: string;
};
