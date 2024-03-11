import { Link } from "react-router-dom";
import { FaHouse, FaCartShopping, FaCircleQuestion } from "react-icons/fa6";
import Nav from "./index.styles";

const HeaderNav = () => (
  <Nav>
    <Link to="/">
      <FaHouse />
    </Link>
    <Link to="/contact">
      <FaCircleQuestion />
    </Link>
    <Link to="/cart">
      <FaCartShopping />
    </Link>
  </Nav>
);

export default HeaderNav;
