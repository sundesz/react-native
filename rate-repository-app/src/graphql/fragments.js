import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryParts on Repository {
    id
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
