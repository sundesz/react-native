import React from 'react';
import { View } from 'react-native';
import Text from '../helpers/Text';

export const convertToK = (number) => {
  if (number >= 1000) {
    const num = (number / 1000).toFixed(1);
    return `${Number(num)}k`;
  }
  return number;
};

const RepositoryItemCount = ({ countNumber, name, testID = '' }) => {
  return (
    <View>
      <Text fontWeight="bold" fontSize="heading1" testID={testID}>
        {convertToK(countNumber)}
      </Text>
      <Text color="textSecondary" fontSize="heading1">
        {name}
      </Text>
    </View>
  );
};

export default RepositoryItemCount;
