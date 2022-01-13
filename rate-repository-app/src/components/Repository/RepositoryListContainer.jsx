import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useHistory } from 'react-router-native';
import EmptyComponent from '../helpers/EmptyComponent';
import RepositoryFilter from './RepositoryFilter';
import RepositoryItem from './RepositoryItem';
import RepositorySearch from './RepositorySearch';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  header: {
    margin: 20,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const HeaderComponent = ({ refetch }) => (
  <View style={styles.header}>
    <RepositorySearch refetch={refetch} />
    <RepositoryFilter refetch={refetch} />
  </View>
);

const RepositoryListContainer = ({ repositories, refetch, onEndReach }) => {
  const history = useHistory();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => history.push(`/repositories/${item.id}`)}>
        <RepositoryItem repository={item} />
      </Pressable>
    );
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<HeaderComponent refetch={refetch} />}
      ListEmptyComponent={<EmptyComponent text="repositories" />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryListContainer;
