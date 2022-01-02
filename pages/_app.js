import Layout from "../components/Layout";
import "../styles/globals.css";
import LoginProvider from "../context/loginContext";

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginProvider>
  );
}

export default MyApp;
