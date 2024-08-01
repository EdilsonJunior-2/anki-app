import "./App.css";
import { useEffect } from "react";
import "./assets/styles.scss";
import { StudyProvider } from "./contexts/study";
import { StudentProvider } from "./contexts/student";
import Pages from "./pages";
import { keepConnection } from "./api/auth";

function App() {

	useEffect(() => {
		keepConnection();

		setInterval(() => {
			keepConnection();
		}, 270000);

		// const previousInterval = 1;
		// const rating = 1;
		// const meter = 0;
		// console.log(Math.round(
		// 	100 * (previousInterval || 1) * (1 + Math.exp(-rating + meter + 1))
		// ) / 100)

		// const data = [];
		// var id = 568;
		// const defaultUrl = (page: string, deck: string, index: number) => `src/cards/images/${page}/${deck}/${index + 1}.jpg`;
		// const imageAnswer = [
		// 	"Hipófise",
		// 	"Sela turca",
		// 	"Fossa hipofisária",	
		// 	"Adeno-hipófise",
		// 	"Parte distal da hipófise",
		// 	"Parte tuberal da hipófise",
		// 	"Parte intermédia da hipófise",
		// 	"Fenda hipofisária",
		// 	"Trabéculas fibrosas da adeno-hipófise",
		// 	"Neuro-hipófise",
		// 	"Parte nervosa da hipófise",
		// 	"Haste infundibular",
		// 	"Infundíbulo da hipófise",
		// 	"Hipotálamo",
		// 	"Eminência mediana do hipotálamo",
		// 	"Lâmina terminal",
		// 	"Quiasma óptico",
		// 	"Corpo mamilar"
		// ]

		// const array = [
		// 	{
		// 		question: "Definição de hipófise",
		// 		answer: `Glândula “mestre” do sistema endócrino que controla o restante das glândulas endócrinas`
		// 	},
		// 	{
		// 		question: "Partes principais da hipófise",
		// 		answer: "Adenohipófise (lobo anterior, derivada do ectoderma oral) e Neurohipófise (lobo posterior, derivada do ectoderma neural)"
		// 	},
		// 	{
		// 		question: "Hormônios produzidos pela adenohipófise",
		// 		answer: `Hormônio de crescimento (somatropina), prolactina, hormônio folículo-estimulante (FSH), hormônio luteinizante (LH), hormônio tireo-estimulante (TSH), hormônio adrenocorticotrópico (ACTH)`
		// 	},
		// 	{
		// 		question: "Hormônios produzidos pela neurohipófise",
		// 		answer: `Ocitocina, hormônio antidiurético (vasopressina ou ADH)`
		// 	},
		// 	{
		// 		question: "Funções da hipófise",
		// 		answer: `Regulação do metabolismo, crescimento, maturação sexual, reprodução, pressão sanguínea, lactação, resposta imune e muitas outras funções e processos físicos vitais`
		// 	},
		// ];

		// for (let i = 0; i < imageAnswer.length; i++) {
		// 	id++;
		// 	const question = defaultUrl("Diencéfalo", "Hipofise", i);
		// 	const type = "Image";
		// 	const answer = imageAnswer[i];

		// 	data.push({ id, question, type, answer });
		// }

		// for (let i = 0; i < array.length; i++) {
		// 	id++;
		// 	const question = array[i].question;
		// 	const type = "Discursive";
		// 	const answer = array[i].answer;

		// 	data.push({ id, question, type, answer });
		// }

		// console.log(data);

		// let id = 1;
		// let finalId = 568;
		// const defaultStr = (i: number) => `(1, ${i}, 0, GETDATE(), 1, 1, 1)`;
		// let str = defaultStr(1);

		// for (var i = id + 1; i <= finalId; i++) {
		// 	str = str.concat(", ", defaultStr(i))
		// }

		// console.log(str);

		// const deckDataArray: any[] = []
		// json.map(category => category.decks.map(deck => {
		// 	deckDataArray.push({
		// 		id: deck.id,
		// 		length: deck.cards.length,
		// 		initialId: deck.cards[0].id,
		// 		finalId: deck.cards[deck.cards.length - 1].id
		// 	})
		// }))
		// console.log(deckDataArray)
	}, []);

	return (
		<StudentProvider>
			<StudyProvider>
				<Pages />
			</StudyProvider>
		</StudentProvider>
	);
}

export default App;
