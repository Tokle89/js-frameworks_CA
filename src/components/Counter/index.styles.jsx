import styled from "styled-components";
import { Flex } from "../../styles/Flex";

const CounterContainer = styled(Flex)`
  gap: 10px;

  button {
    height: 30px;
    width: 30px;
    background-color: var(--color-secondary);
    color: var(--color-primary);
    border-radius: 5px;
    border: 1px solid var(--color-primary);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-secondary);
    }
  }
`;

export default CounterContainer;
