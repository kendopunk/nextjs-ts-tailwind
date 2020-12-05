/*
 * pages/_app.tsx
 * Description: Entry point
 * Copyright (c) 2020 Mark Fehrenbacher
 */
import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import 'fontsource-poppins'

import '../styles/index.css'
// import '../styles/sandbox.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <main>
      <Component {...pageProps} />
    </main>
  </>
)

export default App
