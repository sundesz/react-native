import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../../graphql/mutation';
import ReviewContainer from './ReviewContainer';
import { useHistory } from 'react-router-native';
import ErrorComponent from '../helpers/ErrorComponent';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 10,
  },
});

const CreateReview = () => {
  const [mutate] = useMutation(CREATE_REVIEW);
  const [error, setError] = React.useState(null);
  const history = useHistory();

  const reviewSubmitHandler = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;

    try {
      const response = await mutate({
        variables: { repositoryName, ownerName, rating: Number(rating), text },
      });
      setError(null);
      history.push(`/repositories/${response.data.createReview.repositoryId}`);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <View style={styles.container}>
      {error && <ErrorComponent errorMessage={error} />}
      <ReviewContainer reviewSubmitHandler={reviewSubmitHandler} />
    </View>
  );
};

export default CreateReview;
