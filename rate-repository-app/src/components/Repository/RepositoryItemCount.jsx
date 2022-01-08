import React from 'react';
import { View } from 'react-native';
import Text from '../Text';

const convertToK = (number) => {
  if (number >= 1000) {
    const num = (number / 1000).toFixed(1);
    return `${Number(num)}k`;
  }
  return number;
};

const RepositoryItemCount = ({ countNumber, name }) => {
  return (
    <View>
      <Text fontWeight="bold" fontSize="heading">
        {convertToK(countNumber)}
      </Text>
      <Text color="textSecondary" fontSize="heading">
        {name}
      </Text>
    </View>
  );
};

export default RepositoryItemCount;
