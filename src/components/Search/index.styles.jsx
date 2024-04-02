import styled from "styled-components";
import { Flex } from "../../styles/Flex";

export const SearchWrapper = styled.div`
  position: fixed;
  top: 3em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  border-radius: 5px;
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  min-width: 300px;
  input {
    padding: 5px;
    width: 100%;
    font-size: 1.2rem;
  }
`;
export const SearchResult = styled(Flex)`
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  gap: 20px;
  color: var(--color-primary);
  font-size: 1.2rem;
  margin: 20px 0;
  align-items: center;
`;
