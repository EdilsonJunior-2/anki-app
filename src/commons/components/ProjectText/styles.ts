import { Typography } from "antd";
import {
  ThemeTypes,
  ThemeVariants,
  ThemeFontWeights,
  ThemeFontSizes,
  ThemeHeaderLevels,
} from "@types";
import styled from "styled-components";

const { Text, Title } = Typography;

const StyledText = styled(Text)<StyledTextProps>`
  color: ${({ type, variant, theme }) =>
    type
      ? variant
        ? theme.color[type][variant].main
        : theme.color[type].default.main
      : theme.color.text};
  font-weight: ${({ weight, theme }) =>
    weight ? theme.font.weight[weight] : theme.font.weight.normal};
  font-size: ${({ size, theme }) =>
    size ? theme.font.size[size] : theme.font.size.default};
`;

const StyledTitle = styled(Title)<StyledTitleProps>`
  color: ${({ type, variant, theme }) => {
    return type
      ? variant
        ? theme.color[type][variant].main
        : theme.color[type].default.main
      : theme.color.text;
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
