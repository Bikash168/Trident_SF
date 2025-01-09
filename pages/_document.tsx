// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* External CSS and font styles */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
          
          {/* Meta tags for responsiveness and SEO */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="description" content="Sustainable Action for Climate Resilient Enviro-social Development Foundation, driving environmental and social sustainability." />
          <meta name="keywords" content="SACRED Foundation, climate resilience, environmental sustainability, social development" />
          <meta name="author" content="SACRED Foundation" />
          
          {/* Meta tags for performance */}
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
          <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
          
          {/* Caching and loading optimizations */}
          <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
          <meta http-equiv="Pragma" content="no-cache" />
          <meta http-equiv="Expires" content="0" />

          {/* You can add more stylesheets or font links here */}
          <meta name="p:domain_verify" content="5738d95c5714a031b53b87ec88dddf7a"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
