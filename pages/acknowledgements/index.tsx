/*
 * pages/acknowledgements/index.tsx
 * Description: Credit where credit is due
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

import DefaultLayout from 'components/layouts/DefaultLayout'

type AcknowledgementListItem = {
  href: string
  label: string
}

const AcknowledgementsPage: React.FC = (): JSX.Element => {
  const acks: AcknowledgementListItem[] = [
    {
      href: 'https://www.smashingmagazine.com/2020/10/graphql-server-next-javascript-api-routes/',
      label: 'Building a GraphQL Server in Next.js'
    }
  ]

  return (
    <DefaultLayout title='Acknowledgements'>
      <div>
        <div className='font-bold mb-3 text-2xl'>Acknowledgements</div>

        {acks.map(({ href, label }) => {
          return (
            <div key={href}>
              <a href={href} target='_blank' rel='noreferrer'>
                {label}
              </a>
            </div>
          )
        })}
      </div>
    </DefaultLayout>
  )
}

export default AcknowledgementsPage
