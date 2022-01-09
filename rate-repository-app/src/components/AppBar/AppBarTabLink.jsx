import React from 'react';
import { Link } from 'react-router-native';
import Text from '../Text';
import { appBarStyles } from './AppBarTab';

const AppBarTabLink = ({ name, link }) => {
  return (
    <Link to={link}>
      <Text style={appBarStyles.text}>{name}</Text>
    </Link>
  );
};

export default AppBarTabLink;
