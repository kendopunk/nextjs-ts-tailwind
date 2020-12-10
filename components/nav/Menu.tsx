/*
 * components/nav/Menu.tsx
 * Description: Fixed left navigation component
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import cn from 'classnames'
import { useRouter } from 'next/router'

import { menuConfig } from 'lib/utils'

// bypass server side rendering for <ReactTooltip>
const ReactTooltip: any = dynamic(() => import('components/nossr/ReactTooltipNoSSR'), {
  ssr: false
})

const Menu: React.FC = (): JSX.Element => {
  const router = useRouter()

  return (
    <div className='flex flex-row flex-wrap mb-4 md:flex-col md:border-r md:border-gray-default md:mb-0 amd:mr-4 md:pr-1 md:w-64'>
      {menuConfig.map((m: MF.MenuCfgItem, i: number) => {
        return (
          <React.Fragment key={m.id}>
            <div className='md:mb-4' data-tip data-for={m.id}>
              <Link href={m.route}>
                <a
                  className={cn([
                    'p-1',
                    'rounded',
                    'text-maroon',
                    'text-xs',
                    'md:text-sm',
                    'hover:text-blue-dark',
                    m.route == router.pathname ? 'bg-gray-light' : ''
                  ])}
                >
                  {m.menuLabel}
                </a>
              </Link>
              <div className='hidden md:block'>
                <ReactTooltip
                  id={m.id}
                  place='right'
                  effect='solid'
                  arrowColor='#e6e6e6'
                  backgroundColor='#e6e6e6'
                  textColor='#595959'
                >
                  {m.tooltip}
                </ReactTooltip>
              </div>
            </div>
            {i < menuConfig.length - 1 && (
              /**
               * @TW
               * Hide this separator at medium breakpoint and larger
               */
              <div className='mx-2 text-gray-default text-sm md:hidden'>|</div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Menu
