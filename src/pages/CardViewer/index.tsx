import { useContext, useState } from "react";

import { StudyContext, StudentContext } from "@context";
import { QuestionType } from "@enums";
import { StudentCard } from "@class";
import { indexLoop } from "@utils";

import { changeCardRating, sendNewRatings } from "../../spacedRepetition";
import "./styles.scss"

export default () => {

	const [answerFlag, showAnswer] = useState(false);
	const [index, setIndex] = useState<number>(0);
	const [newRatedCards, setNewRatedCards] = useState<StudentCard[]>([]);

	const { study, letTheStudyBegin, cards, setCards } = useContext(StudyContext);
	const { student } = useContext(StudentContext);

	function timeToRest() {
		sendNewRatings(newRatedCards, student?.code as string).then(() => {
			letTheStudyBegin(false);
		});
	}

	function updateRating(rating: number) {
		showAnswer(false);
		changeCardRating(cards[index], rating);
		const newCardArray = cards;
		if (cards[index].rating !== 4) {
			setNewRatedCards([...newRatedCards, cards[index]]);
			newCardArray.splice(index, 1);
			if (index >= newCardArray.length)
				setIndex(0);
			setCards(newCardArray);
		}
		else {
			cards[index].repetitions += 1;
			setIndex(indexLoop(newCardArray, index))
		};
	}

	return study ? cards.length > 0 ?
		<main className="card-viewer">
			{cards[index].type === `${QuestionType.Image}` ? <img src={cards[index].question} /> : <p>{cards[index].question}</p>}
			{answerFlag ? (
				<div className="card-viewer-answer">
					<p>Resposta: <span>{cards[index].answer}</span></p>
					<div className="card-viewer-rating-options">
						<button onClick={() => updateRating(4)}>De novo</button>
						<button onClick={() => updateRating(3)}>Difícil</button>
						<button onClick={() => updateRating(2)}>Médio</button>
						<button onClick={() => updateRating(1)}>Fácil</button>
					</div>
				</div>
			) : <button onClick={() => showAnswer(true)}>Ver resposta</button>}
		</main>
		: <main>
			<p>todos os cartões completos</p>
			<button onClick={timeToRest}>Voltar</button>
		</main>
		: <></>;
};
