import { Typography } from "antd";
import {
  ThemeTypes,
  ThemeVariants,
  ThemeFontWeights,
  ThemeFontSizes,
  ThemeHeaderLevels,
} from "@types";
import styled from "styled-components";
import Theme from "@themes/theme";

const { Text, Title } = Typography;

const StyledText = styled(Text)<StyledTextProps>`
  color: ${({ type, variant }) =>
    type
      ? variant
        ? //
          Theme.color[type][variant].main
        : Theme.color[type].default.main
      : Theme.color.text};
  font-weight: ${({ weight }) =>
    weight ? Theme.font.weight[weight] : Theme.font.weight.normal};
  font-size: ${({ size }) =>
    size ? Theme.font.size[size] : Theme.font.size.default};
`;

const StyledTitle = styled(Title)<StyledTitleProps>`
  color: ${({ type, variant }) => {
    return type
      ? variant
        ? Theme.color[type][variant].main
        : Theme.color[type].default.main
      : Theme.color.text;
  }}!important;
  margin: ${({ margin }) => margin || "auto 0"} !important ;
`;

interface StyledTextProps {
  type?: ThemeTypes;
  variant?: ThemeVariants;
  weight?: ThemeFontWeights;
  size?: ThemeFontSizes;
  margin?: string;
}

interface StyledTitleProps extends StyledTextProps {
  headerLevel?: ThemeHeaderLevels;
}

export { StyledText, StyledTitle };
export type { StyledTextProps, StyledTitleProps };
