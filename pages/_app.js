import { useEffect, useState } from "react";
import Layout from "../components/Layout";
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : null}
    </>
  );
}
