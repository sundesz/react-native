import { useField } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import Text from '../helpers/Text';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  errorText: {
    marginTop: 5,
    fontSize: 18,
    color: theme.colors.error,
  },
  errorBorder: {
    borderColor: theme.colors.error,
  },
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const textStyle = [style, showError && styles.errorBorder];

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={textStyle}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;
