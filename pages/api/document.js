import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Yahan custom fonts, meta tags, or external CSS links add kar sakte ho */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="My Next.js App Description" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
