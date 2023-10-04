import 'styles/global.css';
import { Helmet } from 'react-helmet';

import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
          <Helmet>
        <script type="text/javascript">{`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "j58gi0phkx");
        `}</script>
      </Helmet>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
