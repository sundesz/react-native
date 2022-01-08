import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  textField: {
    fontSize: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.textField}
      />
      <FormikTextInput
        name="password"
        secureTextEntry
        placeholder="Password"
        style={styles.textField}
      />
      <Pressable onPress={onSubmit}>
        <Text fontSize="heading" fontWeight="bold" style={styles.submitButton}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
