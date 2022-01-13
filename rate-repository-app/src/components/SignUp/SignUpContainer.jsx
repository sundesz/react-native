import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import SignUpForm from './SignUpForm';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, 'Username must be greater or equal to 1')
    .max(30, 'Username must be less or equal to 30')
    .required('Username is required'),
  password: Yup.string()
    .min(5, 'Password must be greater or equal to 5')
    .max(50, 'Password must be less or equal to 50')
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords don't match")
    .required('Password confirmation is required'),
});

const SignUpContainer = ({ signUpHandler }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={signUpHandler}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpContainer;
