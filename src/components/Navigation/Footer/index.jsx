import { Link } from "react-router-dom";
import { NavFooter } from "../index.styles";

const FooterNav = () => (
  <NavFooter>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact Us</Link>
    <Link to="/cart">Cart</Link>
  </NavFooter>
);

export default FooterNav;
