/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuth = /* GraphQL */ `
  mutation CreateAuth(
    $input: CreateAuthInput!
    $condition: ModelAuthConditionInput
  ) {
    createAuth(input: $input, condition: $condition) {
      id
      email
      password
      createdAt
      updatedAt
    }
  }
`;
export const updateAuth = /* GraphQL */ `
  mutation UpdateAuth(
    $input: UpdateAuthInput!
    $condition: ModelAuthConditionInput
  ) {
    updateAuth(input: $input, condition: $condition) {
      id
      email
      password
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuth = /* GraphQL */ `
  mutation DeleteAuth(
    $input: DeleteAuthInput!
    $condition: ModelAuthConditionInput
  ) {
    deleteAuth(input: $input, condition: $condition) {
      id
      email
      password
      createdAt
      updatedAt
    }
  }
`;
