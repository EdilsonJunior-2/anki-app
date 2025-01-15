import { useContext, useEffect } from "react";

import { StudyContext, StudentContext, LoadingContext } from "@context";
import { CardCounter, ProjectCard, ProjectText, TopBar } from "@components";
import { Chapter } from "@class";
import { DeckApi } from "@api";

import "./styles.scss";
import { Tooltip } from "antd";

export default () => {
	const { student, chapters, setChapters } = useContext(StudentContext);
	const { setLoading } = useContext(LoadingContext);
	const { pickCards } = useContext(StudyContext);
	const { studentDecksInfo } = DeckApi;

	useEffect(() => {
		setChapters(null);
		setLoading(true);
		setTimeout(
			() =>
				studentDecksInfo(student?.code as string).then((sd: Chapter[]) => {
					setChapters(sd);
					setLoading(false);
				}),
			1000
		);
	}, []);

	return (
		<main className="deck-selector-container">
			<TopBar title={`Bem vindo, ${student?.name.split(" ", 2)[0]}`} />
			{chapters?.map((chapter, index) => (
				<article key={chapter.name} className="chapter">
					<div id={`chapter-${index + 1}`}>
						<ProjectText headerLevel={4} margin="1rem 0 0">
							Capítulo {index + 1}: {chapter.name}
						</ProjectText>
						<section className="deck-list">
							{chapter.decks.map((deck, deckIndex) => (
								<Tooltip title={deck.name} placement="top">
									<ProjectCard
										key={deck.id}
										title={`${index + 1}.${deckIndex + 1}: ${deck.name}`}
										bodyHeight="5rem"
										actions={[
											<button
												disabled={deck.cardsData.hasAnyCardToStudy}
												onClick={() =>
													pickCards(
														deck.id,
														student?.code as string,
														`${index + 1}.${deckIndex + 1}: ${deck.name}`
													)
												}
											>
												Estudar
											</button>
										]}
									>
										<CardCounter deckDetails={deck.cardsData} />
									</ProjectCard>
								</Tooltip>
							))}
						</section>
					</div>
				</article>
			))}
		</main>
	);
};
