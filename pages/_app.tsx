import 'styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { clarity } from 'react-microsoft-clarity';
import { useEffect } from 'react';


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
