import { useQuery } from '@apollo/client';
import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { IS_USER_LOGGED_IN } from '../../graphql/queries';
import useSignOut from '../../hooks/useSignOut';
import Text from '../Text';
import AppBarTabLink from './AppBarTabLink';

export const appBarStyles = StyleSheet.create({
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
  const { data } = useQuery(IS_USER_LOGGED_IN);
  const [signOut] = useSignOut();

  const osStyle = [appBarStyles.text, appBarStyles.os];

  return (
    <View style={appBarStyles.appBarContainer}>
      <AppBarTabLink name="Repositories" link="/" />

      {data.authorizedUser ? (
        <Pressable onPress={signOut}>
          <Text style={appBarStyles.text}>Sign Out</Text>
        </Pressable>
      ) : (
        <AppBarTabLink name="Sign In" link="/signin" />
      )}

      <Text style={osStyle}>{Platform.OS}</Text>
    </View>
  );
};

export default AppBarTab;
