import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutWrapper } from "./index.styles";

const Layout = () => (
  <LayoutWrapper>
    <Header />
    <Outlet></Outlet>
    <Footer />
  </LayoutWrapper>
);

export default Layout;
