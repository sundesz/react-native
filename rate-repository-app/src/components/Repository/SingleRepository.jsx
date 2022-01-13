import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_BY_ID } from '../../graphql/queries';
import Text from '../helpers/Text';
import RepositoryInfo from './RepositoryInfo';
import Review from '../Review';
import ErrorComponent from '../helpers/ErrorComponent';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    marginBottom: 100,
  },
});

const SingleRepository = () => {
  const { id } = useParams();
  const queryVariables = { id, first: 3 };
  const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORY_BY_ID, {
    fetchPolicy: 'cache-and-network',
    variables: queryVariables,
  });

  if (loading) return null;

  if (error) {
    return <ErrorComponent errorMessage={error} />;
  }

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...queryVariables,
      },
    });
  };

  const onEndReach = () => {
    handleFetchMore();
  };

  const repository = data ? data.repository : null;
  const reviewNodes = data.repository
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <SafeAreaView style={styles.container}>
      {repository ? (
        <FlatList
          data={reviewNodes}
          renderItem={(item) => <Review review={item.item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
        />
      ) : (
        <Text>Repository with {id} not found</Text>
      )}
    </SafeAreaView>
  );
};

export default SingleRepository;
