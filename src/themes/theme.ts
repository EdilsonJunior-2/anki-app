import {
  geekblue,
  green,
  yellow,
  red,
  volcano,
  cyan,
  lime,
  greenDark,
  redDark,
} from "@ant-design/colors";

const Theme = {
  color: {
    background: "#353535",
    text: "#ffffffde",
    primary: {
      light: {
        main: "#ffffff",
        contrastText: "#353535",
      },
      dark: {
        main: "#353535",
        contrastText: "#ffffffde",
      },
    },
    info: {
      light: {
        main: geekblue[3] as string,
        contrastText: "#000000de",
      },
      default: {
        main: geekblue[6] as string,
        contrastText: "#ffffffde",
      },
      dark: {
        main: geekblue[9] as string,
        contrastText: "#ffffffde",
      },
    },
    success: {
      light: {
        main: green[3] as string,
        contrastText: "#000000de",
      },
      default: {
        main: green[6] as string,
        contrastText: "#ffffffde",
      },
      dark: {
        main: green[9] as string,
        contrastText: "#ffffffde",
      },
    },
    warning: {
      light: {
        main: yellow[3] as string,
        contrastText: "#000000de",
      },
      default: {
        main: yellow[6] as string,
        contrastText: "#000000de",
      },
      dark: {
        main: yellow[9] as string,
        contrastText: "#ffffffde",
      },
    },
    error: {
      light: {
        main: redDark[3] as string,
        contrastText: "#000000de",
      },
      default: {
        main: redDark[6] as string,
        contrastText: "#ffffffde",
      },
      dark: {
        main: redDark[9] as string,
        contrastText: "#ffffffde",
      },
    },
    red: {
      light: {
        main: red[3] as string,
        contrastText: "#000000de",
      },
      default: {
        main: red[6] as string,
        contrastText: "#ffffffde",
      },
      dark: {
        main: red[9] as string,
        contrastText: "#ffffffde",
      },
    },
    volcano: {
      light: {
        main: volcano[3] as string,
        contrastText: "#000000de",
      },
      default: {
        main: volcano[6] as string,
        contrastText: "#ffffffde",
      },
      dark: {
        main: volcano[9] as string,
        contrastText: "#ffffffde",
      },
    },
    cyan: {
      light: {
        main: cyan[3] as string,
        contrastText: "#000000de",
      },
      default: {
        main: cyan[6] as string,
        contrastText: "#ffffffde",
      },
      dark: {
        main: cyan[9] as string,
        contrastText: "#ffffffde",
      },
    },
    lime: {
      light: {
        main: lime[3] as string,
        contrastText: "#000000de",
      },
      default: {
        main: lime[6] as string,
        contrastText: "#ffffffde",
      },
      dark: {
        main: lime[9] as string,
        contrastText: "#ffffffde",
      },
    },
    greenDark: {
      light: {
        main: greenDark[3] as string,
        contrastText: "#000000de",
      },
      default: {
        main: greenDark[6] as string,
        contrastText: "#ffffffde",
      },
      dark: {
        main: greenDark[9] as string,
        contrastText: "#ffffffde",
      },
    },
  },
  font: {
    family: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    size: {
      xSmall: ".75rem",
      small: ".875rem",
      default: "1rem",
      big: "1.125rem",
      h4: "1.25rem",
      h3: "1.5rem",
      h2: "1.75rem",
      h1: "2rem",
    },
    weight: {
      thin: "300",
      small: "400",
      normal: "500",
      big: "600",
      bold: "700",
    },
  },
};

export default Theme;
export type BaseThemeProps = typeof Theme;
