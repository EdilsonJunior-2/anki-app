import { blue, geekblue, green, orange, red, gray } from "@ant-design/colors";
import { ThemeTypes, VariantTypes } from "@types";

const colorTheme: ColorThemeProps = {
  primary: {
    light: blue[3] as string,
    primary: blue[6] as string,
    dark: blue[9] as string,
  },
  info: {
    light: geekblue[3] as string,
    primary: geekblue[6] as string,
    dark: geekblue[9] as string,
  },
  success: {
    light: green[3] as string,
    primary: green[6] as string,
    dark: green[9] as string,
  },
  warning: {
    light: orange[3] as string,
    primary: orange[6] as string,
    dark: orange[9] as string,
  },
  error: {
    light: red[3] as string,
    primary: red[6] as string,
    dark: red[9] as string,
  },
  text: {
    light: gray[0] as string,
    primary: gray[6] as string,
    dark: gray[12] as string,
  },
};

interface ColorThemeProps {
  primary: {
    light: string;
    primary: string;
    dark: string;
  };
  info: {
    light: string;
    primary: string;
    dark: string;
  };
  success: {
    light: string;
    primary: string;
    dark: string;
  };
  warning: {
    light: string;
    primary: string;
    dark: string;
  };
  error: {
    light: string;
    primary: string;
    dark: string;
  };
  text: {
    light: string;
    primary: string;
    dark: string;
  };
}

export const color = (type?: ThemeTypes, variant?: VariantTypes) =>
  type
    ? variant
      ? colorTheme[type][variant]
      : colorTheme[type].primary
    : colorTheme.text.light;

export default colorTheme;
