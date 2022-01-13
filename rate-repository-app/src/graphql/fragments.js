import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryParts on Repository {
    id
    url
    name
    fullName
    ownerName
    ownerAvatarUrl
    description
    language
    ratingAverage
    reviewCount
    stargazersCount
    forksCount
  }
`;

export const REVIEW_FIELDS = gql`
  fragment ReviewParts on Review {
    id
    text
    rating
    createdAt
    repositoryId
  }
`;

export const USER_FIELDS = gql`
  fragment UserParts on User {
    id
    username
    createdAt
    reviewCount
  }
`;
