import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';
const GTM_ID = 'GTM-5BDSG7S7';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
        </Script>
        <Head />
        <body>
          <Main />
          <NextScript />
          <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BDSG7S7"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
        </body>
      </Html>
    );
  }
}

export default MyDocument;
