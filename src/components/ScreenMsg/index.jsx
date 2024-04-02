import ScreenMsgContainer from "./index.styles";

// eslint-disable-next-line react/prop-types
const ScreenMsg = ({ msg }) => {
  return (
    <ScreenMsgContainer>
      <p>{msg}</p>
    </ScreenMsgContainer>
  );
};

export default ScreenMsg;
