import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        cursor
        node {
          ...RepositoryParts
        }
      }
    }
  }
  ${REPOSITORY_FIELDS}
`;

export const IS_USER_LOGGED_IN = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
