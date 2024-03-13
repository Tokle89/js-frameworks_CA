import styled from "styled-components";

// export const StyledH1 = styled.h1`
//   h1 {
//     text-align: center;
//   }
// `;

// export const ProductContainer = styled.div`
//   display: grid;
//   justify-content: center;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 20px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   @media (max-width: 450px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;
export const Main = styled.main`

h1{
  text-align:center;
  margin-bottom:50px;
}

& > div:first-of-type{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
  justify-content:center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
}



`;
