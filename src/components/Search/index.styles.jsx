import styled from "styled-components";

const SearchWrapper = styled.div`
  position: fixed;
  top: 3em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  border-radius: 5px;
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  min-width: 500px;

  input {
    padding: 5px;
    width: 80%;
    font-size: 1.2rem;
  }
`;
export default SearchWrapper;
