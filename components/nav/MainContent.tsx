/*
 * components/nav/MainContent.tsx
 * Description: Fixed left navigation component
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

type MainContentPropTypes = {
  children: any
}

const MainContent: React.FC<MainContentPropTypes> = ({ children }): JSX.Element => {
  /**
   * @TW
   * The X-axis padding is 0 by default.
   * At the medium breakpoing, go to X-axis padding of subjective value "4"
   */
  return <div className='px-0 md:px-4 md:w-4/5'>{children}</div>
}

export default MainContent
