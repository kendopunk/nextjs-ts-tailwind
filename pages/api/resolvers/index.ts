/*
 * pages/api/resolvers/index.ts
 * Description: Configuring resolvers for the GitHub user API
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import axios from 'axios'

import asyncWrapper from 'lib/utils/async_wrapper'

export const resolvers = {
  Query: {
    getUsers: async () => {
      const [err, data] = await asyncWrapper(axios.get('https://api.github.com/users'))
      if (err) {
        throw err
      }
      return data.data.map(({ id, login, avatar_url }) => ({
        id,
        login,
        avatar_url
      }))
    },
    getUser: async (_, args) => {
      const [err, data] = await asyncWrapper(axios.get(`https://api.github.com/users/${args.name}`))
      if (err) {
        throw err
      }
      return {
        id: data.data.id,
        login: data.data.login,
        avatar_url: data.data.avatar_url
      }
    }
  }
}
