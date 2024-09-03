import { Typography } from "antd";
import styled from "styled-components";

const StyledCardCounter = styled(Typography)<StyledCardCounterProps>`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;

  svg {
    margin-right: 0.25rem;
  }
`;

interface StyledCardCounterProps {
  loading?: boolean;
  newCardCounter?: number;
}

export default StyledCardCounter;
export type { StyledCardCounterProps };
