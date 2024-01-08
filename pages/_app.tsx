import 'styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    clarity.init('j58gi0phkx');
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
