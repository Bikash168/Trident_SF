import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SACRED FOUNDATION</title>
        <meta
          name="description"
          content="Sustainable Action for Climate Resilient Enviro-social Development Foundation — driving environmental and social sustainability."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Google Analytics Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HZ5VLKVC3S"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HZ5VLKVC3S');
        `}
      </Script>

      {/* Main App Component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
