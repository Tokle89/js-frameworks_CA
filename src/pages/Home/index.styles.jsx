import styled from "styled-components";

export const StyledH1 = styled.h1`
  h1 {
    text-align: center;
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
