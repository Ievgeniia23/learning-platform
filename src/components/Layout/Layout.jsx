import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

import css from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={css.layoutContainer}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout