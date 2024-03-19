import styled from "styled-components";

export const StyledButton = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 5px;
  color: var(--color-primary);
  background: var(--color-secondary);
  border: 1px solid var(--color-primary);
  transition: 0.4s;
  cursor: pointer;

  :hover {
    background: var(--color-primary);
    color: var(--color-secondary);
  }
`;
