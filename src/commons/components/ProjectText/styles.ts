import { Typography } from "antd";
import { ThemeTypes, VariantTypes } from "@types";
import { color } from "assets/colors";
import styled from "styled-components";

const { Text } = Typography;

const StyledText = styled(Text)<StyledTextProps>`
  color: ${(props) => color(props.type, props.variant)};
  font-weight: ${(props) => props.bold && "bold"};
`;

interface StyledTextProps {
  type?: ThemeTypes;
  variant?: VariantTypes;
  bold?: boolean;
}

export default StyledText;
export type { StyledTextProps };
