import { Link } from "react-router-dom";
import { FaHouse, FaCartShopping, FaCircleQuestion } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Nav } from "../index.styles";
import { useState } from "react";
import Search from "../../Search";

const HeaderNav = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
    console.log(showSearchBar);
  };
  return (
    <Nav>
      <button type="button">
        <FaSearch onClick={toggleSearchBar} />
        {showSearchBar && <Search />}
      </button>
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
};

export default HeaderNav;
