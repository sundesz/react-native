import { gql } from '@apollo/client';
import { REVIEW_FIELDS, USER_FIELDS } from './fragments';

export const AUTHORIZED_USER = gql`
  mutation ($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  ${REVIEW_FIELDS}
  mutation (
    $repositoryName: String!
    $ownerName: String!
    $rating: Int!
    $text: String
  ) {
    createReview(
      review: {
        repositoryName: $repositoryName
        ownerName: $ownerName
        rating: $rating
        text: $text
      }
    ) {
      ...ReviewParts
    }
  }
`;

export const CREATE_USER = gql`
  ${USER_FIELDS}
  mutation ($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      ...UserParts
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation ($id: ID!) {
    deleteReview(id: $id)
  }
`;
