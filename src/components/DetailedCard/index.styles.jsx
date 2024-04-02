import styled from "styled-components";
import { Flex, FlexColumn } from "../../styles/Flex";

export const ProductContainer = styled(Flex)`
  width: 100%;
  height: 700px;

  display: flex;
  > * {
    flex: 1;
  }
  img {
    height: 100%;
  }
  h1,
  p,
  button {
    margin: 15px 0;
  }
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled(FlexColumn)`
  background: var(--color-secondary);
  justify-content: center;
  padding: 15px;
`;

export const HeaderContainer = styled(Flex)`
  svg {
    color: #fedc00;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 20px;
    font-size: 1.5em;
  }
`;

export const DiscountedPrice = styled(Flex)`
  gap: 50px;
  flex-direction: row-reverse;
  justify-content: flex-end;
  p:first-of-type {
    text-decoration: line-through;
    color: red;
  }
`;
export const ReviewContainer = styled(Flex)`
  flex-wrap: wrap;
  gap: 10px;
  p:first-of-type {
    order: -1;
    flex-basis: 100%;
  }
`;
export const ReviewCards = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 10px;
  max-width: 300px;
  div {
    align-items: center;
    p {
      margin: 0;
    }
  }
`;
