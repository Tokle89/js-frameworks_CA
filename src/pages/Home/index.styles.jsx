import styled from "styled-components";

export const Main = styled.main`
padding:0 20px;
h1{
  text-align:center;
  margin:30px 0px;}

h2{
  margin-bottom:20px;
}
h1,h2{
  color:var(--color-secondary);
}
& > div:first-of-type{
 display: flex;
 flex-wrap: wrap;
 justify-content: space-evenly;
  gap: 30px;
  max-width: 1250px;




`;
