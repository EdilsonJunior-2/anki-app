import { ThemeProvider } from "styled-components";
import { blue, geekblue, green, orange, red, gray } from "@ant-design/colors";
import { ReactNode } from "react";

const Theme = {
    pallete: {
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
    }
}

const BaseThemeProvider = ({ children }: BaseThemeProviderProps) => {
    return <ThemeProvider theme={Theme}>
        {children}
    </ThemeProvider>
}

interface BaseThemeProviderProps {
    children: ReactNode;
}

export default BaseThemeProvider;

export type BaseThemeProps = typeof Theme;
