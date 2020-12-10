/*
 * pages/codegen/index.tsx
 * Description: Apollo TS codegen
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

import DefaultLayout from 'components/layouts/DefaultLayout'

const CodegenPage: React.FC = (): JSX.Element => {
  return (
    <DefaultLayout title='Apollo Codegen'>
      <div>
        <div className='font-bold mb-3 text-2xl'>Apollo Codegen</div>
      </div>
    </DefaultLayout>
  )
}

export default CodegenPage
