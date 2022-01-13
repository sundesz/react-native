import React from 'react';
import { format } from 'date-fns';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import Text from '../helpers/Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginVertical: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  container_review: {
    flexDirection: 'row',
  },
  container_rating: {
    margin: 15,
  },
  rating: {
    width: 75,
    height: 75,
    borderWidth: 4,
    borderRadius: 75 / 2,
    borderColor: theme.colors.primary,
    color: theme.colors.primary,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 15,
  },
  container_review_info: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  date: {
    marginBottom: 10,
  },
  container_review_actions: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  action_view: {
    backgroundColor: theme.colors.primary,
    color: '#fff',
    borderRadius: 5,
    padding: 20,
    width: 175,
    textAlign: 'center',
  },
  action_delete: {
    backgroundColor: theme.colors.error,
    color: '#fff',
    borderRadius: 5,
    padding: 20,
    width: 175,
    textAlign: 'center',
  },
});

const Review = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_review}>
        <View style={styles.container_rating}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
        <View style={styles.container_review_info}>
          <Text fontWeight="bold" fontSize="heading">
            {review.user.username}
          </Text>
          <Text fontSize="subheading" color="textSecondary" style={styles.date}>
            {format(new Date(review.createdAt), 'MM.dd.Y')}
          </Text>
          <Text fontSize="subheading">{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Review;
