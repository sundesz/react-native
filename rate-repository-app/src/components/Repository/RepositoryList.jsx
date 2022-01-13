import React from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import ErrorComponent from '../helpers/ErrorComponent';

const RepositoryList = () => {
  const { repositories, loading, error, refetch, fetchMore } = useRepositories({
    first: 8,
  });

  // #https://www.apollographql.com/docs/react/data/queries/#inspecting-loading-states
  // if (result.networkStatus === NetworkStatus.refetch) console.log('refetching');

  if (loading) {
    return null;
  }

  if (error) {
    return <ErrorComponent errorMessage={error} />;
  }

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      refetch={refetch}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
