import { useQuery } from '@apollo/client';
import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { GET_AUTHORIZED_USER } from '../../graphql/queries';
import useSignOut from '../../hooks/useSignOut';
import Text from '../helpers/Text';
import AppBarTabLink from './AppBarTabLink';

export const appBarStyles = StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '900',
    paddingVertical: 20,
    paddingRight: 20,
    color: '#fff',
  },
  os: {
    color: '#666',
    textTransform: 'capitalize',
  },
});

const AppBarTab = () => {
  const { data } = useQuery(GET_AUTHORIZED_USER);
  const [signOut] = useSignOut();

  const osStyle = [appBarStyles.text, appBarStyles.os];

  const UserMenu = () => (
    <>
      <AppBarTabLink name="Create a review" link="/createreview" />
      <AppBarTabLink name="My reviews" link="/myreviews" />
      <Pressable onPress={signOut}>
        <Text style={appBarStyles.text}>Sign Out</Text>
      </Pressable>
      <Text style={osStyle}>Welcome {data.authorizedUser.username}</Text>
    </>
  );

  const GeneralMenu = () => (
    <>
      <AppBarTabLink name="Sign in" link="/signin" />
      <AppBarTabLink name="Sign up" link="/signup" />
      <Text style={osStyle}>{Platform.OS}</Text>
    </>
  );

  return (
    <View style={appBarStyles.appBarContainer}>
      <AppBarTabLink name="Repositories" link="/" />

      {data?.authorizedUser ? <UserMenu /> : <GeneralMenu />}
    </View>
  );
};

export default AppBarTab;
