import "./App.css";
import api from "./api";
import { useEffect } from "react";
import "./assets/styles.scss";
import { StudyProvider } from "./contexts/study";
import Pages from "./pages";

function App() {

	useEffect(() => {
		if (!window.sessionStorage.getItem("code"))
			api.get("/studentData/202100104001").then((res) => {
				window.sessionStorage.setItem("name", res.data[0].Name);
				window.sessionStorage.setItem("code", res.data[0].Code);
			});
	}, []);

	return (
		<StudyProvider>
			<Pages />
		</StudyProvider>
	);
}

export default App;
