import styled from "styled-components";

const Main = styled.main`
  background: var(--color-secondary);
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;

  h1 {
    border-bottom: 1px solid var(--color-tertiary);
  }
  p {
    margin-top: 10px;
  }
`;

export default Main;
