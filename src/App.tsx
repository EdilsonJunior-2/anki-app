import "./App.css";
import { useEffect, useState } from "react";
import "./assets/styles.scss";
import { Providers } from "@context";
import Themes from "@themes";
import Pages from "./pages";
function App() {

	const [file, _] = useState<File | null>();

	const reader = new FileReader();
	reader.onload = (event) => {
		const f = (event.target?.result as string).split("\r\n");
		const data = [];
		var id = 978;
		for (let i = 0; i < f.length - 1; i++) {
			id++;
			const a = f[i].split(";");
			data.push({ id, question: a[0], requiresImage: false, answer: a[1] });
		}
	}

	useEffect(() => {
		if (file) {
			reader.readAsText(file);
		}
	}, [file]);

	useEffect(() => {
		/*
		
				const data = [];
				const deckId = 42;
				const name = "";
				var id = 726;
		
				const imageAnswer = [
					""
				]
		
				for (let i = 0; i < imageAnswer.length; i++) {
					id++;
					data.push({ id, question: `Nomeie o item ${i + 1} indicado na imagem`, requiresImage: true, answer: imageAnswer[i] });
				}
		
				console.log({
					id: deckId,
					name: name,
					image: `/catalog/${deckId}.png`,
					cards: data
				});
				<input type="file" onChange={(e) => setFile(e.target.files[0])} />
		*/
	}, []);

	return (
		<Themes.BaseThemeProvider>
			<Themes.AntThemeProvider>
				<Providers.LoadingProvider>
					<Providers.StudentProvider>
						<Providers.StudyProvider>
							<Pages />
						</Providers.StudyProvider>
					</Providers.StudentProvider>
				</Providers.LoadingProvider>
			</Themes.AntThemeProvider>
		</Themes.BaseThemeProvider>

	);
}

export default App;
