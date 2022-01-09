import { Formik } from 'formik';
import React from 'react';
import SignInForm from './SignInForm';
import * as Yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import { useHistory } from 'react-router-native';
import Text from '../Text';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  errorText: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.error,
  },
});

const SignIn = () => {
  const [error, setError] = React.useState(undefined);
  const [signIn] = useSignIn();
  const history = useHistory();

  const submitHandler = async (values) => {
    try {
      await signIn(values);
      setError(undefined);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {error && (
          <Text style={styles.errorText}>{`${error.replace(
            'SignInError:',
            ''
          )}`}</Text>
        )}
      </View>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </>
  );
};

export default SignIn;
