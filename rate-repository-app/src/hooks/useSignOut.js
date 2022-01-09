import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-native';
import useAuthStorage from './useAuthStorage';

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const history = useHistory();

  const signOut = () => {
    try {
      authStorage.removeAccessToken();
      apolloClient.resetStore();
      history.push('/signin');
    } catch (err) {
      console.error(err);
    }
  };
  return [signOut];
};

export default useSignOut;
