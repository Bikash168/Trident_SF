// pages/_app.tsx
import { AppProps } from 'next/app'; // Import AppProps
import Head from 'next/head';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) { // Type the props
  return (
    <>
      <Head>
        <title>SACRED FOUNDATION</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
// pages/_app.js
