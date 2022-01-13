import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import FormikTextInput from '../helpers/FormikTextInput';
import Text from '../helpers/Text';

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

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        testID="usernameField"
        style={styles.textField}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        testID="passwordField"
        secureTextEntry
        style={styles.textField}
      />
      <FormikTextInput
        name="passwordConfirm"
        placeholder="Password confirmation"
        testID="passwordConformField"
        secureTextEntry
        style={styles.textField}
      />

      <Text
        onPress={onSubmit}
        testID="submitButton"
        fontSize="heading"
        fontWeight="bold"
        style={styles.submitButton}
      >
        Sign up
      </Text>
    </View>
  );
};

export default SignUpForm;
