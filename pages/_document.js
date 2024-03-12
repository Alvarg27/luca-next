import Document, { Html, Head, Main, NextScript } from 'next/document';
import { initializeGoogleTagManager } from './googleTagManager';
import { useEffect } from 'react';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;