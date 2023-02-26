export type SignUpFormProps = {
  onSignInButtonPress: () => void;
  onSignUpButtonPress: () => void;
};

export type SignUpFormData = {
  email: string;
  password: string;
  confirmedPassword: string;
};
