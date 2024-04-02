import styled from "styled-components";
import { Flex, JustifiedCenter } from "../../styles/Flex";

export const HeaderContainer = styled(JustifiedCenter)`
  align-items: center;
  color: var(--color-secondary);
  padding: 20px;
  gap: 15px;
  svg {
    font-size: 30px;
  }
`;
export const CartContainer = styled(JustifiedCenter)`
  flex-direction: column;
  align-items: center;
  background-color: var(--color-secondary);
  padding: 20px;
  min-height: 250px;
  min-width: 300px;
  h3 {
    margin-bottom: 20px;
  }
`;

export const CartItem = styled(Flex)`
  gap: 50px;
  width: 400px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  max-height: 150px;
  img {
    height: 140px;
    width: 140px;
  }
  h2,
  p {
    margin-bottom: 10px;
  }

  @media (max-width: 468px) {
    width: 100%;
    gap: 20px;
    img {
      height: 120px;
      width: 120px;
    }
  }
`;

export const CartTotal = styled(Flex)`
  border-top: 1px solid var(--color-primary);
  width: 100%;
  justify-content: ${(props) => (props.hasProducts ? "space-between" : "center")};
  padding-top: 20px;
  align-items: end;
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;
