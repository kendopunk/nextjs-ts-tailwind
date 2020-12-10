/*
 * pages/conventions/index.tsx
 * Description: Conventions
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

import DefaultLayout from 'components/layouts/DefaultLayout'

const CodeConventionsPage: React.FC = (): JSX.Element => {
  return (
    <DefaultLayout title='Coding Conventions'>
      <div>
        <div className='font-bold mb-3 text-2xl'>Code Conventions</div>
      </div>
    </DefaultLayout>
  )
}

export default CodeConventionsPage
