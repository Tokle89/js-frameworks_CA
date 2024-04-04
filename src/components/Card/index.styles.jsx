import styled from "styled-components";
import { Flex, FlexColumn, FlexColumnBetween, JustifiedSpaceBetween } from "../../styles/Flex";

export const StyledCard = styled(FlexColumn)`
  background: var(--color-secondary);
  height: 400px;
  width: 280px;
  border-radius: 5px;
  svg {
    font-size: 2.5em;
  }
  > * {
    flex: 1;
  }
  h2 {
    font-weight: 500;
  }
`;
export const InfoContainer = styled(FlexColumnBetween)`
  padding: 10px;
`;
export const ImgContainer = styled.div`
  height: 200px;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  img {
    height: 100%;
    max-width: 280px;
    aspect-ratio: 1/1;
  }
`;

export const RatingContainer = styled(Flex)`
  gap: 10px;
  align-items: center;
  svg {
    color: #fedc00;
    font-size: 1.2em;
  }
`;

export const BtnContainer = styled(JustifiedSpaceBetween)`
  align-items: center;
`;

export const DiscountedPrice = styled(JustifiedSpaceBetween)`
  flex-wrap: wrap;
  p:nth-child(1),
  p:nth-child(2) {
    color: red;
  }
  p:nth-child(1) {
    flex-basis: 100%;
  }
  p:nth-child(2) {
    text-decoration: line-through;
  }
`;
