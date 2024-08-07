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
