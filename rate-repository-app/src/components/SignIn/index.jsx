import { Formik } from 'formik';
import React from 'react';
import SignInForm from './SignInForm';
import * as Yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be greater or equal to 3')
    .required('Username is required'),
  password: Yup.string()
    .min(3, 'Password must be greater or equal to 3')
    .required('Password is required'),
});

const SignIn = () => {
  const submitHanlder = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHanlder}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
