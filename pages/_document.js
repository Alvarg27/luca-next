import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5BDSG7S7');`,
            }}
          />
        </Head>
        <body>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5BDSG7S7"
            height="0"
            width="0"
          ></iframe>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
