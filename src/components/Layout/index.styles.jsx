import styled from "styled-components";

export const HeaderFooterWrapper = styled.div`
  color: #fff;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
