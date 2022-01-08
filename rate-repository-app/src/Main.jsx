import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Switch, Route, Redirect } from 'react-router-native';
import theme from './theme';
import AppBar from './components/AppBar';
import SignIn from './components/SignIn';
import RepositoryList from './components/Repository/RepositoryList';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: theme.fonts.main,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
