import HeaderNav from "../../Navigation/Header";

import { HeaderFooterWrapper } from "../index.styles";

import Logo from "../../Logo";

const Header = () => (
  <header>
    <HeaderFooterWrapper>
      <Logo />
      <HeaderNav />
    </HeaderFooterWrapper>
  </header>
);
export default Header;
