import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import Text from '../helpers/Text';
import RepositoryItem from './RepositoryItem';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
  },
  linkButton: {
    backgroundColor: theme.colors.primary,
    color: '#fff',
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const RepositoryInfo = ({ repository }) => {
  return (
    <View style={styles.container}>
      <RepositoryItem repository={repository} />
      <Text
        fontSize="heading"
        fontWeight="bold"
        style={styles.linkButton}
        onPress={() => Linking.openURL(repository.url)}
      >
        Open in GitHub
      </Text>
    </View>
  );
};

export default RepositoryInfo;
