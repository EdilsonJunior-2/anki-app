// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import {
	Card,
	createEmptyCard,
	Grades,
	formatDate,
	fsrs,
	generatorParameters,
	Rating,
	FSRS,
	fixRating,
	SchedulingCard,
	State,
} from "ts-fsrs";
import ProjectCard from "./classes/CardClass";
import Student from "./classes/student";
import Deck from "./classes/Deck";
import cardsJson from "./cards/cards.json";
import api from "./api";
import { useEffect } from "react";

function App() {
	// const [count, setCount] = useState(0);
	const newCard: ProjectCard = new ProjectCard({
		question: "What's this?",
		answer: "A question :)",
	}, "1");
	// console.log(newCard)
	const fsrs: FSRS = new FSRS({ enable_fuzz: false, maximum_interval: 1000000000 });

	const scheduled = new SchedulingCard(newCard.fsData, new Date());
	scheduled.update_state(State.New);
	const newStudent: Student = new Student({
		name: "Edilson",
		registration: "202100104001",
	});

	newStudent.addCard(
		newCard
	);

	const newDeck: Deck = new Deck({
		type: "General Knowledge",
		cards: [newCard]
	});

	useEffect(() => {
		if (!window.sessionStorage.getItem("code"))
			api.get("/studentData/202100104001").then(res => {
				window.sessionStorage.setItem("name", res.data[0].Name);
				window.sessionStorage.setItem("code", res.data[0].Code);
				console.log(res);
			});
	}, []);

	function pickCards() {
		api.get("/student/202100104001/deck/1").then(res => {
			const deckCards = cardsJson.decks[0].categories[0].categories.find(category => category.id === res.data.deck)?.cards as any[];
			const cardsToStudy = deckCards.filter(card => res.data.cards.find((c: any) => c.cardId === card.id));
			console.log(cardsToStudy, res.data);
		})
	}

	// console.log(newDeck)
	// const params = generatorParameters({ enable_fuzz: false });
	// const f = fsrs(params);

	// const scheduling_cards = f.repeat(card, now);
	// Grades.forEach((grade) => {
	//   // [Rating.Again, Rating.Hard, Rating.Good, Rating.Easy]
	//   const { log, card } = scheduling_cards[grade];
	//   console.group(`${Rating[grade]}`);
	//   console.table({
	//     [`card_${Rating[grade]}`]: {
	//       ...card,
	//       due: formatDate(card.due),
	//       last_review: formatDate(card.last_review as Date),
	//     },
	//   });
	//   console.table({
	//     [`log_${Rating[grade]}`]: {
	//       ...log,
	//       review: formatDate(log.review),
	//     },
	//   });
	//   console.groupEnd();
	//   console.log(
	//     "----------------------------------------------------------------"
	//   );
	// });
	return (
		<div>
			<button type="button" onClick={pickCards}>Teste</button>
		</div>
	);
}

export default App;
