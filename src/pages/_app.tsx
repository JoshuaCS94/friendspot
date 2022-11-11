import type { AppProps } from 'next/app'
import 'keen-slider/keen-slider.min.css'

import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
