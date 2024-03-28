import ScreenMsgContainer from "./index.styles";

const ScreenMsg = ({ msg }) => {
  return (
    <ScreenMsgContainer>
      <p>{msg}</p>
    </ScreenMsgContainer>
  );
};

export default ScreenMsg;
