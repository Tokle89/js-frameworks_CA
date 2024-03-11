import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1;
  }
  footer {
    margin-top: auto;
  }
`;

export default LayoutWrapper;
