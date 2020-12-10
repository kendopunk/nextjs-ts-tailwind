/*
 * pages/acknowledgements/index.tsx
 * Description: Credit where credit is due
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

import DefaultLayout from 'components/layouts/DefaultLayout'

const AcknowledgementsPage: React.FC = (): JSX.Element => {
  return (
    <DefaultLayout title='Acknowledgements'>
      <div>
        <div className='font-bold mb-3 text-2xl'>Acknowledgements</div>
      </div>
    </DefaultLayout>
  )
}

export default AcknowledgementsPage
