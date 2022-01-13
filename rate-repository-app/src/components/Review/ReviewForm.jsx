import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
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
  textareaField: {
    fontSize: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

const ReviewForm = ({ reviewSubmitHandler }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository owner name"
        testID="ownerNameField"
        style={styles.textField}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
        testID="repositoryNameField"
        style={styles.textField}
      />
      <FormikTextInput
        name="rating"
        type="number"
        placeholder="Rating between 0 and 100"
        testID="ratingField"
        style={styles.textField}
      />
      <FormikTextInput
        name="text"
        placeholder="Review"
        testID="reviewField"
        style={styles.textareaField}
        multiline={true}
        numberOfLines={4}
      />
      <Pressable onPress={reviewSubmitHandler} testID="submitButton">
        <Text fontSize="heading" fontWeight="bold" style={styles.submitButton}>
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
