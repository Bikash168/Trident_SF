import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SACRED FOUNDATION</title>
        <meta name="description" content="A description of your web app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
