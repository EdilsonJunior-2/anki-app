import { useContext, useEffect } from "react";

import { StudyContext, StudentContext } from "@context";
import { CardCounter, ProjectCard, TopBar } from "@components";
import { StudentDeck } from "@interface";
import { decks } from "@assets";
import { DeckApi } from "@api";

import "./styles.scss";

export default () => {
	const { student, studentDecks, setStudentDecks } = useContext(StudentContext);
	const { pickCards } = useContext(StudyContext);
	const { studentDecksInfo } = DeckApi;

	useEffect(() => {
		studentDecksInfo(student?.code as string).then((sd: StudentDeck[]) => {
			setStudentDecks(sd);
		});
	}, []);

	return (
		<main className="deck-selector-container">
			<TopBar title={`Bem vindo, ${student?.name.split(" ", 2)[0]}`} />
			{decks.map((category, index) => (
				<article key={category.name} className="chapter">
					<div id={`chapter-${index + 1}`}>
						<h3>
							Capítulo {index + 1}: {category.name}
						</h3>
						<section className="deck-list">
							{category.decks.map((deck, deckIndex) => (
								<ProjectCard
									key={deck.id}
									title={`${index + 1}.${deckIndex + 1}: ${deck.name}`}
									actions={[
										<button
											disabled={false}
											onClick={() =>
												pickCards(deck.id, student?.code as string)
											}
										>
											Estudar
										</button>,
									]}
								>
									{studentDecks && (
										<CardCounter deckDetails={studentDecks[deck.id - 1]} />
									)}
								</ProjectCard>
							))}
						</section>
					</div>
				</article>
			))}
		</main>
	);
};
