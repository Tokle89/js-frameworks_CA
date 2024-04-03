import styled from "styled-components";

export const Form = styled.form`
  background: var(--color-secondary);
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  border-radius: 5px;
  label {
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 5px;
  }
  input {
    padding: 5px;
    margin-bottom: 20px;
  }
  button {
    margin-top: 25px;
  }
  p {
    color: red;
    font-size: 1em;
    margin: 5px 0;
  }
`;

export const StyledH1 = styled.h1`
  color: var(--color-secondary);
  margin-bottom: 20px;
`;
