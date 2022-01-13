import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useHistory } from 'react-router-native';
import theme from '../../theme';
import Text from '../helpers/Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  action_view: {
    backgroundColor: theme.colors.primary,
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    width: 175,
    textAlign: 'center',
  },
  action_delete: {
    backgroundColor: theme.colors.error,
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    width: 175,
    textAlign: 'center',
  },
});

const ReviewActions = ({ review, deleteHandler }) => {
  const history = useHistory();

  const viewRepository = () => {
    history.push(`/repositories/${review.repositoryId}`);
  };

  const deleteRepository = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'CANCEL',
          style: 'cancel',
        },
        { text: 'DELETE', onPress: () => deleteHandler(review.id) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.action_view}
        fontWeight="bold"
        fontSize="subheading"
        onPress={viewRepository}
      >
        View Repository
      </Text>
      <Text
        style={styles.action_delete}
        fontWeight="bold"
        fontSize="subheading"
        onPress={deleteRepository}
      >
        Delete Review
      </Text>
    </View>
  );
};

export default ReviewActions;
