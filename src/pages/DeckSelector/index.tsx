import { CSSProperties, useContext } from "react";
import DecksJson from "../../cards/cards.json";
import { Collapse, CollapseProps } from "antd";
import "./styles.scss";
import StudyContext from "../../contexts/study";

export default () => {
	const panelStyle: CSSProperties = {
		color: "white",
		width: "100%",
		padding: ".5rem",
	};

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
								onClick={() => pickCards(deck.id)}>Estudar</button>
						</li>
					))}
				</ul>
			),
			style: panelStyle,
			headerClass: "collapse-header",
		}));
	return <Collapse ghost collapsible="header" items={items(panelStyle)} />;
};
