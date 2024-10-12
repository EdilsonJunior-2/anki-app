import Icon from "@ant-design/icons";
import { ThemeFontSizes, ThemeTypes, ThemeVariants } from "@types";
import styled from "styled-components";

const StyledIcon = styled(Icon)<StyledIconProps>`
  font-size: ${({ size, theme }) => {
    return size ? theme.font.size[size] : theme.font.size.default;
  }};
  svg {
    fill: ${({ type, variant, theme }) =>
      type
        ? variant
          ? theme.color[type][variant].main
          : theme.color[type].default.main
        : theme.color.text};
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
