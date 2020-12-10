/*
 * pages/graphql/index.tsx
 * Description: About GraphQL and Next.js' /api route
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

import DefaultLayout from 'components/layouts/DefaultLayout'

const GraphQLPage: React.FC = (): JSX.Element => {
  return (
    <DefaultLayout title='GraphQL'>
      <div>
        <div className='font-bold mb-3 text-2xl'>GraphQL example</div>
      </div>
    </DefaultLayout>
  )
}

export default GraphQLPage
