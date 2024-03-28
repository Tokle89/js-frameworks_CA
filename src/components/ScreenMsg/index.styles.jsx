import styled from "styled-components";

const ScreenMsgContainer = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  width: 50%;
  transform: translate(-50%);
  text-align: center;
  background-color: #ffd1d1;
  padding: 30px;
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  p {
    font-size: 1.5em;
  }
  @media (max-width: 500px) {
    width: 90%;
    p {
      font-size: 1.2em;
    }
  }
`;

export default ScreenMsgContainer;
