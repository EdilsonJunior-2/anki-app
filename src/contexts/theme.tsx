import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: ThemeProviderProps) => (
	<ConfigProvider
		theme={{
			components: {
				Card: {
					colorBgBase: "#2b2b2b",
					headerBg: "#2b2b2b",
					colorBgContainer: "#2b2b2b",
				},
				Layout: {
					headerBg: "#2b2b2b",
					headerColor: "white",
					headerPadding: "0 1rem"
				},
				Menu: {
					itemBg: "#2b2b2b",
					iconSize: 16,
				}
			},
		}}
	>
		{children}
	</ConfigProvider>
);

interface ThemeProviderProps {
	children: ReactNode;
}

export default ThemeProvider;
