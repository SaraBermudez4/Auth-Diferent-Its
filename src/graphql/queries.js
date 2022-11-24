/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuth = /* GraphQL */ `
  query GetAuth($id: ID!) {
    getAuth(id: $id) {
      id
      email
      password
      createdAt
      updatedAt
    }
  }
`;
export const listAuths = /* GraphQL */ `
  query ListAuths(
    $filter: ModelAuthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
