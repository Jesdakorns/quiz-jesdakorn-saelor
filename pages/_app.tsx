import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head >
        <title>quiz-jesdakorn-saelor</title>
   
      </Head>
      <Component {...pageProps} />
    </>

  );
}


export default MyApp
