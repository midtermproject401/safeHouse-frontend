// import "bootstrap/dist/css/bootstrap.min.css";
// lllll
import Layout from "../components/Layout";
import "../styles/globals.css";
import LoginProvider from "../context/loginContext";
// llllllllll
import "../styles/header.css";

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
