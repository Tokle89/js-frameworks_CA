import { Link } from "react-router-dom";
import { FaHouse, FaCartShopping, FaCircleQuestion } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Nav, CartWrapper, CartCounter } from "../index.styles";
import { useState } from "react";
import Search from "../../Search";
import { useCartStore } from "../../../store";

const HeaderNav = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const products = useCartStore((state) => state.products);

  const cartCounter = products.reduce((acc, product) => acc + product.count, 0);
  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
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
        <CartWrapper>
          <FaCartShopping />
          {cartCounter > 0 && <CartCounter>{cartCounter}</CartCounter>}
        </CartWrapper>
      </Link>
    </Nav>
  );
};

export default HeaderNav;
