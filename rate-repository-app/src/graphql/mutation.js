import { gql } from '@apollo/client';

export const AUTHORIZED_USER = gql`
  mutation ($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
