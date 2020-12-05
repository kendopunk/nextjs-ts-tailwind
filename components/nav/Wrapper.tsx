/*
 * components/nav/Wrapper.tsx
 * Description: Flex wrapper component holding left nav (top nav responsive) and main content
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

const Wrapper: React.FC = ({ children }): JSX.Element => {
  return <div className='twa-wrapper'>{children}</div>
}

export default Wrapper
