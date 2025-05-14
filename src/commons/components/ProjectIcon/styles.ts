import Icon from "@ant-design/icons";
import { ThemeFontSizes, ThemeTypes, ThemeVariants } from "@types";
import styled from "styled-components";
import Theme from "@themes/theme";
const StyledIcon = styled(Icon)<StyledIconProps>`
  font-size: ${({ size }) => {
    return size ? Theme.font.size[size] : Theme.font.size.default;
  }};
  svg {
    fill: ${({ type, variant }) =>
      type
        ? variant
          ? Theme.color[type][variant].main
          : Theme.color[type].default.main
        : Theme.color.text};
  }
`;

interface StyledIconProps {
  component: any;
  type?: ThemeTypes;
  variant?: ThemeVariants;
  size?: ThemeFontSizes;
}

export default StyledIcon;
export type { StyledIconProps };
