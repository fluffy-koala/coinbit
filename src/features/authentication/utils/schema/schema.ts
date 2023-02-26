import { object, string } from 'yup';

const schema = {
  signInForm: object().shape({
    email: string()
      .trim()
      .required('Email is required')
      .email('Hmm… this is not a valid email'),
    password: string().trim().required('Password is required'),
  }),
  signUpForm: object().shape({
    confirmedPassword: string()
      .trim()
      .required('Confirm Password is required')
      .test(
        'passwords-must-match',
        'Passwords must match',
        (value, context) => {
          return context.parent.password === value;
        },
      ),
    email: string()
      .trim()
      .required('Email is required')
      .email('Hmm… this is not a valid email'),
    password: string()
      .trim()
      .required('Password is required')
      .matches(/^(?=.{8,})/, 'Must Contain 8 Characters'),
  }),
};

export default schema;
