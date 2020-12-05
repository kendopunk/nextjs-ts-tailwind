/*
 * lib/graphql/queries/users.query.ts
 * Description: All users query
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import { gql } from 'apollo-server-micro'

const usersQuery = gql`
  query UserQuery {
    getUsers {
      id
      login
      avatar_url
    }
  }
`

export default usersQuery
