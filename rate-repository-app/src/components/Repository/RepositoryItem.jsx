import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import Text from '../helpers/Text';

import RepositoryItemCount from './RepositoryItemCount';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  row_1_Container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  row_2_Container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 5,
  },
  infoContainer: {
    flexGrow: 1,
    width: 1,
  },
  description: {
    marginVertical: 10,
  },
  languageView: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  language: {
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  imgAvatar: {
    height: 60,
    width: 60,
    borderRadius: 5,
    marginRight: 10,
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row_1_Container}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.imgAvatar}
            source={{ uri: repository.ownerAvatarUrl }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text fontWeight="bold" fontSize="heading" testID="fullName">
            {repository.fullName}
          </Text>
          <Text
            color="textSecondary"
            fontSize="subheading"
            style={styles.description}
            testID="description"
          >
            {repository.description}
          </Text>
          <View style={styles.languageView}>
            <Text
              fontSize="subheading"
              style={styles.language}
              testID="language"
            >
              {repository.language}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.row_2_Container}>
        <RepositoryItemCount
          countNumber={repository.stargazersCount}
          name="Stars"
          testID="stargazersCount"
        />
        <RepositoryItemCount
          countNumber={repository.forksCount}
          name="Forks"
          testID="forksCount"
        />
        <RepositoryItemCount
          countNumber={repository.reviewCount}
          name="Reviews"
          testID="reviewCount"
        />
        <RepositoryItemCount
          countNumber={repository.ratingAverage}
          name="Rating"
          testID="ratingAverage"
        />
      </View>
    </View>
  );
};

export default RepositoryItem;
