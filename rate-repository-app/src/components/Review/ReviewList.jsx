// TODO: infinite scrolling is not working

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../../graphql/queries';
import ErrorComponent from '../helpers/ErrorComponent';
import ReviewListContainer from './ReviewListContainer';

const ReviewList = () => {
  const queryVariables = { includeReviews: true, first: 3 };
  const { data, loading, error, refetch, fetchMore } = useQuery(
    GET_AUTHORIZED_USER,
    {
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
      variables: queryVariables,
    }
  );

  if (loading) {
    return null;
  }

  if (error) {
    return <ErrorComponent errorMessage={error} />;
  }

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) return null;

    fetchMore({
      variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        ...queryVariables,
      },
    });
  };

  const reviewNodes = data
    ? data.authorizedUser.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <ReviewListContainer
      reviews={reviewNodes}
      refetch={refetch}
      fetchMore={handleFetchMore}
    />
  );
};
export default ReviewList;
