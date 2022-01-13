import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../helpers/Text';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
});

const EmptyComponent = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text fontSize="heading" fontWeight="bold" color="error">
        No {text} found
      </Text>
    </View>
  );
};

export default EmptyComponent;
