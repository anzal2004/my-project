// pages/_app.js

import '../styles/globals.css'; // agar tumne global CSS file banayi hai

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
