import React from 'react';
import useSignIn from '../../hooks/useSignIn';
import { useHistory } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import SignInContainer from './SignInContainer';
import ErrorComponent from '../helpers/ErrorComponent';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 20,
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
        {error && <ErrorComponent errorMessage={error} />}
      </View>
      <SignInContainer submitHandler={submitHandler} />
    </>
  );
};

export default SignIn;
