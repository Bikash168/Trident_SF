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

          {/* Verification Meta Tags */}
          <meta name="p:domain_verify" content="5738d95c5714a031b53b87ec88dddf7a" />
          <meta name="google-site-verification" content="KqTEK616JhBYeZiOhfrTYJg33saYlSKiHjPJNrs0HMk" />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="SACRED Foundation - Sustainable Action for Climate Resilience" />
          <meta property="og:description" content="Driving environmental and social sustainability for a resilient future." />
          <meta property="og:image" content="https://www.sacred.foundation/og-image.jpg" />
          <meta property="og:url" content="https://www.sacred.foundation" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@SACREDFoundation" />
          <meta name="twitter:title" content="SACRED Foundation - Sustainable Action for Climate Resilience" />
          <meta name="twitter:description" content="Driving environmental and social sustainability for a resilient future." />
          <meta name="twitter:image" content="https://www.sacred.foundation/og-image.jpg" />

          <meta name="robots" content="index, follow" />

          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="SACRED Foundation" />
          <link rel="apple-touch-icon" href="/icons/apple-icon-180x180.png" />
          <link rel="manifest" href="/manifest.json" />

          <meta http-equiv="Content-Language" content="en" />
          <meta name="language" content="English" />

          <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://cdnjs.cloudflare.com; style-src 'self' https://cdnjs.cloudflare.com" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* Preload Resources */}
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" as="style" />
          <link rel="preload" href="/path/to/important-script.js" as="script" />

          <meta http-equiv="Feature-Policy" content="microphone 'none'; camera 'none'" />




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
