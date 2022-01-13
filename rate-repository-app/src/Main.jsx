import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Switch, Route, Redirect } from 'react-router-native';
import theme from './theme';
import AppBar from './components/AppBar';
import SignIn from './components/SignIn';
import RepositoryList from './components/Repository/RepositoryList';
import SingleRepository from './components/Repository/SingleRepository';
import CreateReview from './components/Review/CreateReview';
import SignUp from './components/SignUp';
import ReviewList from './components/Review/ReviewList';

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
        <Route path="/repositories/:id">
          <SingleRepository />
        </Route>
        <Route path="/repositories">
          <RepositoryList />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/createreview">
          <CreateReview />
        </Route>
        <Route path="/myreviews">
          <ReviewList />
        </Route>
        <Redirect to="/" />
      </Switch>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
