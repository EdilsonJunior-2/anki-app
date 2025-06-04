import styled from "styled-components";
import { Card, CardProps } from "antd";

const StyledCard = styled(Card)<CardProps & StyledCardProps>`
  border-radius: 0.5rem 0.5rem 0 0;
  max-width: 45rem;
  .ant-card-head {
    color: white;
    .ant-card-head-title {
      white-space: ${(props) => (props.wrap ? "wrap" : "norwap")};
    }
  }
  .ant-card-body {
    min-height: 8rem;
    height: ${(props) => props.bodyHeight || "auto"};
  }
  .ant-card-actions {
    display: grid;
    grid-template-columns: ${(props) =>
      props.actionColumns
        ? `repeat(${props.actionColumns}, ${100 / props.actionColumns}%)`
        : "100%"};

    li {
      margin: 0;
      width: calc(100% - 1px) !important;
      border: 1px solid #f0f0f0;

      &:nth-child(2n) {
        border-right: none;
      }

      &:nth-child(2n - 1) {
        border-left: none;
      }
    }

    button {
      width: 100%;
      border: none;
      border-radius: 0;
      min-height: 3rem;
    }

    &::before {
      display: none;
    }
  }
`;

interface StyledCardProps {
  bodyHeight?: string;
  actionColumns?: number;
  wrap?: boolean;
}

export default StyledCard;
export type { StyledCardProps };
