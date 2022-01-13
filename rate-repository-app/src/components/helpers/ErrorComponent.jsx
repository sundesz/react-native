import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import Text from '../helpers/Text';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: theme.colors.error,
    backgroundColor: '#fff',
  },
  errorText: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
});

const ErrorComponent = ({ errorMessage }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading" color="error">
        Error! {errorMessage}
      </Text>
    </View>
  );
};

export default ErrorComponent;
