/*
 * pages/index.tsx
 * Description: Entry page
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'
import Link from 'next/link'

import DefaultLayout from 'components/layouts/DefaultLayout'
import { menuConfig } from 'lib/utils'

const IndexPage: React.FC = (): JSX.Element => {
  return (
    <DefaultLayout title='Welcome'>
      <div>
        <div className='font-bold mb-3 text-2xl'>Welcome</div>
        <p className='mb-3'>
          I&#039;m using this project as a tuturial of sorts to assist colleagues with the finer
          points of NextJS, esp. with respect to TailwindCSS integrations, among other things.
        </p>
        <p className='mb-3'>
          The interface is a little spartan, but I&#039;m not much of a designer...it is responsive
          though.
        </p>
        <div className='font-bold mb-3 text-xl'>Table of Contents</div>
        <div className='md:mx-4'>
          {menuConfig
            .filter((f: MF.MenuCfgItem) => f.tocLabel)
            .map((m: MF.MenuCfgItem) => {
              return (
                <React.Fragment key={m.id}>
                  <div className='mb-4'>
                    <div className='font-bold mb-1'>
                      <Link href={m.route}>
                        <a>{m.tocLabel}</a>
                      </Link>
                    </div>
                    <div className='md:ml-2'>{m?.snippet ?? ''}</div>
                  </div>
                </React.Fragment>
              )
            })}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
