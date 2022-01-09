import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../../hooks/useRepositories';
import Text from '../Text';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => <RepositoryItem repository={item} />;

  if (loading) {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  }

  if (error) return `Error! ${error}`;

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
