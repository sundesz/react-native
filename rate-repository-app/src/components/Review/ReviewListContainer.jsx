import { useMutation } from '@apollo/client';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { DELETE_REVIEW } from '../../graphql/mutation';
import EmptyComponent from '../helpers/EmptyComponent';
import ErrorComponent from '../helpers/ErrorComponent';
import Review from './index';
import ReviewActions from './ReviewActions';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: '#fff',
  },
});

const ReviewListContainer = ({ reviews, refetch, fetchMore }) => {
  const [error, setError] = React.useState(null);
  const [mutation] = useMutation(DELETE_REVIEW);

  const deleteReviewHandler = async (reviewId) => {
    try {
      await mutation({ variables: { id: reviewId } });
      setError(null);
    } catch (error) {
      setError(error.message);
    }
    refetch();
  };

  const renderItem = (item) => {
    return (
      <View style={styles.container}>
        <Review review={item.item} />
        <ReviewActions review={item.item} deleteHandler={deleteReviewHandler} />
      </View>
    );
  };

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<EmptyComponent text="review" />}
      ListHeaderComponent={error && <ErrorComponent errorMessage={error} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ReviewListContainer;
