import { Fragment } from "react/cjs/react.production.min";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
