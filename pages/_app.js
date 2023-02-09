import Layout from "@/components/layouts/Layout";
import { NavigationProvider } from "@/context/NavigationProvider";
import { PageOffsetProvider } from "@/context/PageOffsetProvider";
import { useEffect, useState } from "react";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    console.log(
      "%cPowered by %ctectify",
      "color: lightgrey; font-family:helvetica; font-size: 18px ;",
      "color: rgb(29,78,216); font-family:helvetica; font-size: 38px ; font-weight: bold;"
    );
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded ? (
        <NavigationProvider>
          <PageOffsetProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PageOffsetProvider>
        </NavigationProvider>
      ) : null}
    </>
  );
}
