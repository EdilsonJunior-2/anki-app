import { useContext, useState } from "react";
import "./styles.scss"
import { changeCardRating, sendNewRatings } from "../../spacedRepetition";
import { indexLoop } from "../../utils";
import StudyContext from "../../contexts/study";
import { QuestionType } from "../../commons/enums/QuestionType";

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
		if (cards[index].rating !== 4) {
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
			{cards[index].type === `${QuestionType.Image}` ? <img src={cards[index].question} /> : <p>{cards[index].question}</p>}
			{answerFlag ? (
				<div className="card-viewer-answer">
					<p>Resposta: <span>{cards[index].answer}</span></p>
					<div className="card-viewer-rating-options">
						<button onClick={() => updateRating(4)}>De novo (+1min)</button>
						<button onClick={() => updateRating(3)}>Difícil (+1 dia)</button>
						<button onClick={() => updateRating(2)}>Médio (+4 dias)</button>
						<button onClick={() => updateRating(1)}>Fácil (+7 dias)</button>
					</div>
				</div>
			) : <button onClick={() => showAnswer(true)}>Ver resposta</button>}
		</div>
		: <div>
			<p>todos os cartões completos</p>
			<button onClick={timeToRest}>Voltar</button>
		</div>
		: <></>;
};
