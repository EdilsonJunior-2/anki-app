import Icon from "@ant-design/icons";
import { color } from "assets/colors";
import { ThemeTypes, VariantTypes } from "@types";
import styled from "styled-components";
const StyledIcon = styled(Icon)<StyledIconProps>`
  font-size: ${(props) => props.size || "1rem"};
  svg {
    fill: ${(props) => color(props.type, props.variant)};
  }
`;

interface StyledIconProps {
  component: any;
  type?: ThemeTypes;
  variant?: VariantTypes;
  size?: string;
}

export default StyledIcon;
export type { StyledIconProps };
