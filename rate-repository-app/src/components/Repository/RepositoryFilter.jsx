import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import useAppStorage from '../../hooks/useAppStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  picker: {
    color: 'red',
  },
  pickerLabel: {
    fontSize: 18,
    color: '#000',
  },
  pickerLabelGray: {
    fontSize: 18,
    color: '#999',
    fontWeight: 'bold',
  },
});

const RepositoryFilter = ({ refetch }) => {
  const [filterRepositories, setFilterRepositories] = React.useState('latest');
  // const appStorage = useAppStorage();

  // const getFilter = async () => {
  //   try {
  //     const appStorage = await appStorage.getAppItem('filter');
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   if (appStorage) {
  //     setFilterRepositories(appStorage);
  //   }
  // };

  // React.useEffect(() => {
  //   getFilter();
  // }, []);

  const onFilterChange = async (value) => {
    if (value) {
      // try {
      //   await appStorage.setAppItem('filter', value);
      // } catch (error) {
      //   console.log('error setting filter', error);
      // }
      setFilterRepositories(value);
      refetch(ratingDescription[value]);
    }
  };

  const ratingDescription = {
    lowestRating: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
    highestRating: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
    latest: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={filterRepositories}
        onValueChange={onFilterChange}
        style={styles.picker}
        // itemStyle={styles.pickerLabel}
      >
        <Picker.Item
          label="Select an item..."
          value=""
          style={styles.pickerLabelGray}
        />
        <Picker.Item
          label="Latest repositories"
          value="latest"
          style={styles.pickerLabel}
        />
        <Picker.Item
          label="Highest rated repositories"
          value="highestRating"
          style={styles.pickerLabel}
        />
        <Picker.Item
          label="Lowest rated repositories"
          value="lowestRating"
          style={styles.pickerLabel}
        />
      </Picker>
    </View>
  );
};

export default RepositoryFilter;
