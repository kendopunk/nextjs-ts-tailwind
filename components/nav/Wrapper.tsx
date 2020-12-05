/*
 * components/nav/Wrapper.tsx
 * Description: Flex wrapper component holding primary menu and main content
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'

const Wrapper: React.FC = ({ children }): JSX.Element => (
  <div className='flex flex-col my-2 p-4 md:flex-row md:my-0'>{children}</div>
)
export default Wrapper
