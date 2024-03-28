import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  a {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

export const NavFooter = styled(Nav)`
   {
    width: 400px;
    a {
      font-size: 1.5rem;
    }
    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;

export const CartWrapper = styled.div`
  position: relative;
`;

export const CartCounter = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  border-radius: 50%;
  background-color: #FFD1D1;
  color: #000;
  padding: 5px;
  width: 35px;
  height: 35px;
  display flex;
  justify-content: center;
  align-items: center;
`;
