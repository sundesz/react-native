import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS, REVIEW_FIELDS, USER_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
      edges {
        cursor
        node {
          ...RepositoryParts
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  ${REVIEW_FIELDS}
  ${USER_FIELDS}
  query ($includeReviews: Boolean = false, $first: Int, $after: String) {
    authorizedUser {
      ...UserParts
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        totalCount
        edges {
          node {
            ...ReviewParts
            user {
              ...UserParts
            }
          }
          cursor
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  ${REPOSITORY_FIELDS}
  ${REVIEW_FIELDS}
  ${USER_FIELDS}
  query ($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryParts
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            ...ReviewParts

            user {
              ...UserParts
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;
