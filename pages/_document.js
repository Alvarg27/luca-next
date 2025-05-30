import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { FB_PIXEL_ID } from "../lib/fpixels";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
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
