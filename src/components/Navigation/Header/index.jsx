import { NavLink } from "react-router-dom";
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
  const closeSearchBar = () => {
    setShowSearchBar(false);
  };
  return (
    <Nav>
      <button type="button">
        <FaSearch onClick={toggleSearchBar} />
        {showSearchBar && <Search onClose={closeSearchBar} />}
      </button>
      <NavLink to="/">
        <FaHouse />
      </NavLink>
      <NavLink to="/contact">
        <FaCircleQuestion />
      </NavLink>
      <NavLink to="/cart">
        <CartWrapper>
          <FaCartShopping />
          {cartCounter > 0 && <CartCounter>{cartCounter}</CartCounter>}
        </CartWrapper>
      </NavLink>
    </Nav>
  );
};

export default HeaderNav;
