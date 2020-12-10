/*
 * pages/buttons/index.tsx
 * Description: Tailwind button examples
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

import DefaultLayout from 'components/layouts/DefaultLayout'

const TWButtonsPage: React.FC = (): JSX.Element => {
  return (
    <DefaultLayout title='TW Buttons'>
      <div>
        <div className='font-bold mb-3 text-2xl'>Tailwind Button Examples</div>
      </div>
    </DefaultLayout>
  )
}

export default TWButtonsPage
