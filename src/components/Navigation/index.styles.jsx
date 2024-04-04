import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;

  a,
  button {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 2rem;
    border-radius: 25%;
    padding: 3px;
    transition: ease-in-out 0.2s;
    &:hover {
      background-color: ${(props) => props.theme.colors.tertiary};
    }
  }

  a.active {
    color: #ffd1d1;
    border-bottom: 2px solid #ffd1d1;
  }
  button {
    background-color: transparent;
    border: none;
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
