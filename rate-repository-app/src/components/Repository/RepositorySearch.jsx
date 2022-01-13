// TODO: AsyncStorage is not working

import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
// import useAppStorage from '../../hooks/useAppStorage';

const styles = StyleSheet.create({
  searchInput: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
});

const RepositorySearch = ({ refetch }) => {
  // const appStorage = useAppStorage();
  const [searchQuery, setSearchQuery] = React.useState('');
  const debounced = useDebouncedCallback((query) => {
    refetch({ searchKeyword: query });
  }, 300);

  // const getSearch = async () => {
  //   try {
  //     const appStorage = await appStorage.getAppItem('search');
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   if (appStorage) {
  //     setSearchQuery(appStorage);
  //   }
  // };

  // React.useEffect(() => {
  //   getSearch();
  // }, []);

  const onChangeSearch = async (query) => {
    // try {
    //   await appStorage.setAppItem('search', query);
    // } catch (err) {
    //   console.error('error setting search', err);
    // }
    setSearchQuery(query);
    query.length ? debounced(query) : refetch({ searchKeyword: query });
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchInput}
      inputStyle={styles.searchInput}
    />
  );
};

export default RepositorySearch;
