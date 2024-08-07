import { ReactNode, createContext, useState } from "react";

const LoadingContext = createContext<LoadingData>({} as LoadingData);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
	const [loading, setLoading] = useState<boolean>(false);

	return <LoadingContext.Provider value={{ loading, setLoading }} >
		{children}
	</LoadingContext.Provider>
};

export default LoadingContext;

interface LoadingData {
	loading: boolean;
	setLoading: (isLoading: boolean) => void;
}

