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
