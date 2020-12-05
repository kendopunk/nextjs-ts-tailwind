/*
 * apollo.config.js
 * Description: Apollo configuration so we can generate types from the schema
 * Copyright (c) 2020 Mark Fehrenbacher
 */
module.exports = {
  client: {
    service: {
      name: 'local_github_user_api',
      url: 'http://localhost:3000/api/graphql',
      skipSSLValidation: true
    }
  }
}
