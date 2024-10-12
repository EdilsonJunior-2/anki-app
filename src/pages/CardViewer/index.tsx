import { useContext, useState } from "react";

import { StudyContext, StudentContext } from "@context";
import { StudentCard } from "@class";
import { indexLoop } from "@utils";

import { changeCardRating, sendNewRatings } from "../../spacedRepetition";
import "./styles.scss";
import { Skeleton } from "antd";
import { ProjectCard } from "@components";

export default () => {
	const [answerFlag, showAnswer] = useState(false);
	const [index, setIndex] = useState<number>(0);
	const [newRatedCards, setNewRatedCards] = useState<StudentCard[]>([]);

	const { letTheStudyBegin, cards, setCards, currentChapter } = useContext(StudyContext);
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
			if (index >= newCardArray.length) setIndex(0);
			setCards(newCardArray);
		} else {
			cards[index].repetitions += 1;
			setIndex(indexLoop(newCardArray, index));
		}
	}

	return <main className="card-viewer">
		<h3>Capítulo {currentChapter}</h3>
		{cards.length > 0 ? (
			<>
				<ProjectCard
					key={cards[index].type}
					actionColumns={answerFlag ? 2 : 1}
					title={<>
						<p>{cards[index].question}</p>
						{cards[index].requiresImage && <img src={`/images/${currentChapter}.png`} alt={`${currentChapter}`} />}</>

					}
					actions={answerFlag ?
						[<button onClick={() => updateRating(4)}>De novo</button>,
						<button onClick={() => updateRating(3)}>Difícil</button>,
						<button onClick={() => updateRating(2)}>Médio</button>,
						<button onClick={() => updateRating(1)}>Fácil</button>]
						: [
							<button onClick={() => showAnswer(true)}>Ver resposta</button>
						]}
				>
					<p className="card-answer">
						Resposta:
						<Skeleton
							loading={!answerFlag}
							title={false}
							paragraph={{ rows: 1, width: 128 }}
						>
							<span>{cards[index].answer}</span>
						</Skeleton>
					</p>
				</ProjectCard>
			</>
		) : (<>
			<p>Todos os cartões da sessão estudados</p>
			<button onClick={timeToRest}>Voltar</button>
		</>
		)}</main>
};
