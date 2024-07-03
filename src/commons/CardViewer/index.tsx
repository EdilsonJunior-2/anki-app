import { useContext, useState } from "react";
import "./styles.scss"
import { changeCardRating, sendNewRatings } from "../../spacedRepetition";
import { indexLoop } from "../../utils";
import StudyContext from "../../contexts/study";

export default () => {

	const [answerFlag, showAnswer] = useState(false);
	const [index, setIndex] = useState<number>(0);
	const [newRatedCards, setNewRatedCards] = useState<any[]>([]);

	const { study, letTheStudyBegin, cards, setCards } = useContext(StudyContext);

	function timeToRest() {
		sendNewRatings(newRatedCards).then(() => {
			letTheStudyBegin(false);
		});
	}

	function updateRating(rating: number) {
		showAnswer(false);
		changeCardRating(cards[index], rating);
		const newCardArray = cards;
		if (cards[index].rating !== 1) {
			setNewRatedCards([...newRatedCards, cards[index]]);
			newCardArray.splice(index, 1);
			if (index >= newCardArray.length)
				setIndex(0);
			setCards(newCardArray);
		}
		else setIndex(indexLoop(newCardArray, index));
	}

	return study ? cards.length > 0 ?
		<div className="card-viewer">
			<img src={cards[index].image} />
			{answerFlag ? (
				<div>
					<div>{cards[index].answer}</div>
					<button onClick={() => updateRating(1)}>De novo</button>
					<button onClick={() => updateRating(2)}>Difícil</button>
					<button onClick={() => updateRating(3)}>Médio</button>
					<button onClick={() => updateRating(4)}>Fácil</button>
				</div>

			) : <button onClick={() => showAnswer(true)}>Ver resposta</button>}
		</div>
		: <div>
			<p>todos os cartões completos</p>
			<button onClick={timeToRest}>Voltar</button>
		</div>
		: <></>;
};
