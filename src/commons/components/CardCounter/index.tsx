import { BulbOutlined, CheckOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { StudentDeck } from "../../interfaces/StudentDeck";
import "./styles.scss";
export default (props: CardCounterProps) => {
	const { deckDetails } = props;
	return (
		<div className="card-counter-alerts">
			{deckDetails.newCards > 0 &&
				<p className="new-cards-alert">
					<BulbOutlined width="1rem" height="1rem" />
					{deckDetails.newCards} novos cartões a serem estudados
				</p>
			}
			{deckDetails.repeatedCards > 0 &&
				<p className="repeated-cards-alert">
					<InfoCircleOutlined width="1rem" height="1rem" />
					{deckDetails.repeatedCards} cartões a serem revisados
				</p>
			}{
				deckDetails.repeatedCards + deckDetails.newCards == 0 &&
				<p className="no-cards-alert">
					<CheckOutlined width="1rem" height="1rem" />
					Não existem cartões a serem estudados nesse baralho, parabéns!
				</p>
			}
		</div>
	);
};

interface CardCounterProps {
	deckDetails: StudentDeck;
}
