import { CSSProperties, useContext } from "react";
import DecksJson from "../../cards/cards.json";
import { Collapse, CollapseProps } from "antd";
import "./styles.scss";
import StudyContext from "../../contexts/study";
import StudentContext from "../../contexts/student";

export default () => {
	const panelStyle: CSSProperties = {
		color: "white",
		width: "100%",
		padding: ".5rem",
	};
	const { student } = useContext(StudentContext);
	const { pickCards } = useContext(StudyContext);

	const items: (panelStyle: CSSProperties) => CollapseProps["items"] = (
		panelStyle
	) =>
		DecksJson.map((category, index) => ({
			key: index,
			label: category.name,
			children: (
				<ul>
					{category.decks.map((deck) => (
						<li key={deck.id}>
							<p>
								{deck.name}
							</p>
							<button
								onClick={() => pickCards(deck.id, student?.code as string)}>Estudar</button>
						</li>
					))}
				</ul>
			),
			style: panelStyle,
			headerClass: "collapse-header",
		}));
	return <main>
		<h2>Bem vindo, {student?.name.split(" ", 2)[0]}</h2>
		<Collapse ghost collapsible="header" items={items(panelStyle)} />
	</main>;
};
