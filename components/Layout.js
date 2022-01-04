import Footer from "./Footer.jsx";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
