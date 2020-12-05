/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserQuery
// ====================================================

export interface UserQuery_getUsers {
  __typename: "User";
  id: string | null;
  login: string | null;
  avatar_url: string | null;
}

export interface UserQuery {
  getUsers: (UserQuery_getUsers | null)[] | null;
}
