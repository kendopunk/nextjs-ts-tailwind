/*
 * components/nav/TopNav.tsx
 * Description: Top navigation menu
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

const TopNav: React.FC = (): JSX.Element => (
  <div className='flex flex-col bg-maroon p-4 shadow-md text-blue-lightest text-lg md:flex-row md:items-center'>
    <div className='font-bold text-orange-light md:mr-2'>[ nextjs-ts-tailwind ]</div>
    <div className='hidden md:block md:mr-2'>:</div>
    <div className='text-sm md:text-lg'>NextJS, Typescript, TailwindCSS, GraphQL and more...</div>
  </div>
)

export default TopNav
