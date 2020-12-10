/*
 * pages/custom404/index.tsx
 * Description: Building a custom 404 page
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

import DefaultLayout from 'components/layouts/DefaultLayout'

const Custom404Page: React.FC = (): JSX.Element => {
  return (
    <DefaultLayout title='TW Buttons'>
      <div>
        <div className='font-bold mb-3 text-2xl'>Building a Custom 404 Page</div>
      </div>
    </DefaultLayout>
  )
}

export default Custom404Page
