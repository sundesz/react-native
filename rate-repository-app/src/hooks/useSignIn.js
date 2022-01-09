import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/mutation';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZED_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const response = await mutate({ variables: { username, password } });
      await authStorage.setAccessToken(response.data.authorize.accessToken);
      apolloClient.resetStore();
    } catch (err) {
      throw new Error(`SignInError: ${err.message}`);
    }
  };

  return [signIn, result];
};

export default useSignIn;
