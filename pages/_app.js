import Layout from '@/components/layouts/Layout';
import { NavigationProvider } from '@/context/NavigationProvider';
import { PageOffsetProvider } from '@/context/PageOffsetProvider';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    console.log(
      '%cPowered by %ctectify',
      'color: lightgrey; font-family:helvetica; font-size: 18px ;',
      'color: rgb(29,78,216); font-family:helvetica; font-size: 38px ; font-weight: bold;'
    );
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded ? (
        <NavigationProvider>
          <PageOffsetProvider>
            <Layout>
              <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=GTM-5BDSG7S7"
              />
              <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/ns.html?id=GTM-5BDSG7S7"
              />
              <Script
                strategy="afterInteractive"
                id="google-analytics"
              >
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GTM-5BDSG7S7');
                  `}
              </Script>
              <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5BDSG7S7');`,
                }}
              />
              <Component {...pageProps} />
            </Layout>
          </PageOffsetProvider>
        </NavigationProvider>
      ) : null}
    </>
  );
}
