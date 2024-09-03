import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const AntThemeProvider = ({ children }: AntThemeProviderProps) => (
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
				},
				Modal: {
					contentBg: "#2b2b2b",
					headerBg: "#2b2b2b",
					titleColor: "white",
					titleFontSize: 20
				},

			},
		}}
	>
		{children}
	</ConfigProvider>
);

interface AntThemeProviderProps {
	children: ReactNode;
}

export default AntThemeProvider;
