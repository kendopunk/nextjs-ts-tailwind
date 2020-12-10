/*
 * pages/containers/index.tsx
 * Description: Tailwind container examples
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

import DefaultLayout from 'components/layouts/DefaultLayout'

const TWContainersPage: React.FC = (): JSX.Element => {
  return (
    <DefaultLayout title='TW Containers'>
      <div>
        <div className='font-bold mb-3 text-2xl'>Tailwind Container Examples</div>
      </div>
    </DefaultLayout>
  )
}

export default TWContainersPage
