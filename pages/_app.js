import Layout from "../components/Layout";
import LoadingPage from "../components/LoadingPage";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
