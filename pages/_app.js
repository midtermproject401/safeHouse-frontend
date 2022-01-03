// import "bootstrap/dist/css/bootstrap.min.css";
// lllll
import Layout from "../components/Layout";
import "../styles/globals.css";
import LoginProvider from "../context/loginContext";
// llllllllll
import "../styles/header.css";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LoginProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoginProvider>
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);

// function MyApp({ Component, pageProps }) {
//   console.log(store);
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }
// const makestore = () => store;
// const wrapper = createWrapper(makestore);
// export default wrapper.withRedux(MyApp);
