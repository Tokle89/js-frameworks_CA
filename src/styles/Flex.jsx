import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;
export const JustifiedCenter = styled(Flex)`
  justify-content: center;
`;

export const JustifiedSpaceBetween = styled(Flex)`
  justify-content: space-between;
`;
export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;
export const FlexColumnBetween = styled(JustifiedSpaceBetween)`
  flex-direction: column;
`;
