import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Friendspot</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
