/*
 * components/nav/TopMenu.tsx
 * Description: Top navigation menu
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'
import Link from 'next/link'

const TopMenu: React.FC = (): JSX.Element => {
  return (
    <div className='twa-topnav'>
      <div className='mr-2 text-16 text-gray-lightest'>
        <Link href='/'>nextjs-ts-tailwind</Link>
      </div>
      <div className='hidden mr-2 text-16 text-gray-lightest md:block'>:</div>
      <div className='mr-2 text-16 text-blue-midnight'>
        NextJS, Typescript, Tailwind, GraphQL, and some other goodness.
      </div>
    </div>
  )
}

export default TopMenu
