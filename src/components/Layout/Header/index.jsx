import HeaderNav from "../../Navigation/Header";
import Search from "../../Search";
import StyledHeader from "./index.styles";
import Logo from "../../logo";

const Header = () => (
  <StyledHeader>
    <Logo />
    <Search />
    <HeaderNav />
  </StyledHeader>
);
export default Header;
