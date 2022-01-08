import React from 'react';
import Constants from 'expo-constants';
import { Dimensions, View, ScrollView, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../../theme';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  appBar: {
    width: screenWidth,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.appBar}>
        <AppBarTab />
      </ScrollView>
    </View>
  );
};

export default AppBar;
