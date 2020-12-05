/*
 * components/nav/Menu.tsx
 * Description: Fixed left navigation component
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'
import Link from 'next/link'

type MenuItem = {
  id: number
  route: string
  label: string
}

const Menu: React.FC = (): JSX.Element => {
  const menuConfig: MenuItem[] = [
    {
      id: 1,
      route: '/',
      label: 'Home'
    },
    {
      id: 2,
      route: '/users',
      label: 'GitHub Users'
    },
    {
      id: 3,
      route: '/buttons',
      label: 'Some Great Buttons'
    },
    {
      id: 12,
      route: '/',
      label: 'Home'
    },
    {
      id: 22,
      route: '/users',
      label: 'GitHub Users'
    },
    {
      id: 32,
      route: '/buttons',
      label: 'Buttons'
    }
  ]

  return (
    <div className='twa-leftmenu'>
      {menuConfig.map((m: MenuItem) => {
        return (
          <div
            key={m.id}
            className='border-r border-blue-cornflower mr-2 pr-2 md:border-none md:mb-4'
          >
            <Link href={m.route}>
              <a className='text-blue-cornflower hover:text-blue-midnight'>{m.label}</a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Menu
