/*
 * components/layouts/DefaultLayout.tsx
 * Description: Default layout -> topnav, left nav, main container
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'
import Head from 'next/head'

import { MainContent, Menu, TopNav, Wrapper } from 'components/nav/'

type DefaultLayoutProps = {
  title?: string
  children?: any // rendered under <MainContent>
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, children }: DefaultLayoutProps) => (
  <React.Fragment>
    <Head>
      <meta charSet='utf-8' />
      <link rel='shortcut icon' href='/assets/favicon.ico' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <title>{`nextjs-ts-tailwind: ${title ?? 'Welcome'}`}</title>
    </Head>
    <TopNav />
    <Wrapper>
      <Menu />
      <MainContent>{children}</MainContent>
    </Wrapper>
  </React.Fragment>
)

export default DefaultLayout
