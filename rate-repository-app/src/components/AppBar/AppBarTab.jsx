import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../Text';

const styles = StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
    fontWeight: '900',
    paddingVertical: 20,
    paddingHorizontal: 5,
    color: '#fff',
  },
  os: {
    color: '#666',
    textTransform: 'capitalize',
  },
});

const AppBarTab = () => {
  const osStyle = [styles.text, styles.os];
  return (
    <View style={styles.appBarContainer}>
      <Link to="/">
        <Text style={styles.text}>Repositories</Text>
      </Link>
      <Link to="/signin">
        <Text style={styles.text}>Sign In</Text>
      </Link>

      <Text style={osStyle}>{Platform.OS}</Text>
    </View>
  );
};

export default AppBarTab;
