import { Link } from "react-router-dom";

const FooterNav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact Us</Link>
    <Link to="/cart">Cart</Link>
  </nav>
);

export default FooterNav;
