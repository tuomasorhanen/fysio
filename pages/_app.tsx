import 'styles/global.css';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script type="text/javascript" src="src/_lib/clarityScript.js"></script>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
