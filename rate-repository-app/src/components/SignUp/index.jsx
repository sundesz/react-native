import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-native';
import { CREATE_USER } from '../../graphql/mutation';
import useSignIn from '../../hooks/useSignIn';
import SignUpContainer from './SignUpContainer';
import ErrorComponent from '../helpers/ErrorComponent';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 10,
  },
});

const SignUp = () => {
  const [error, setError] = React.useState(null);
  const [signIn] = useSignIn();
  const history = useHistory();
  const [mutation] = useMutation(CREATE_USER);

  const signUpHandler = async (values) => {
    const { username, password } = values;
    try {
      await mutation({ variables: { username, password } });
      signIn({ username, password });
      setError(null);
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
      <SignUpContainer signUpHandler={signUpHandler} />
    </>
  );
};

export default SignUp;
