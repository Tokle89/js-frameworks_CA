import styled from "styled-components";
import { FlexColumn, JustifiedSpaceBetween } from "../../styles/Flex";
export const HeaderFooterWrapper = styled(JustifiedSpaceBetween)`
  color: #fff;
  max-width: 1250px;
  margin: 0 auto;
  align-items: center;
  padding: 20px;
  a {
    color: #fff;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const LayoutWrapper = styled(FlexColumn)`
  min-height: 100vh;
  main {
    flex: 1;
  }
  footer {
    margin-top: auto;
  }
  footer,
  header {
    background: #000;
  }
`;
