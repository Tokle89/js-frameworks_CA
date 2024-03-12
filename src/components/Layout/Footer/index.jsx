import FooterNav from "../../Navigation/Footer";
import Logo from "../../Logo";
import { HeaderFooterWrapper } from "../index.styles";

const Footer = () => (
  <footer>
    <HeaderFooterWrapper>
      <Logo>E-COM ©</Logo>
      <FooterNav />
    </HeaderFooterWrapper>
  </footer>
);
export default Footer;
