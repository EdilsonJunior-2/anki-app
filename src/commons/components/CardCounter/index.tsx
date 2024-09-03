import {
	BulbOutlined,
	CheckOutlined,
	InfoCircleOutlined,
} from "@ant-design/icons";
import { StudentDeck } from "@interface";
import { useContext } from "react";
import { LoadingContext, StudentContext } from "@context";
import { Skeleton } from "antd";
import StyledCardCounter from "./styles";
import ProjectIcon from "../ProjectIcon";
import ProjectText from "../ProjectText";

export default (props: CardCounterProps) => {
	const { deckDetails } = props;
	const { loading } = useContext(LoadingContext);
	const { studentDecks } = useContext(StudentContext);
	return (
		<StyledCardCounter>
			<Skeleton
				active
				loading={loading && !studentDecks}
				paragraph={{ rows: 1 }}
				title={false}
			/>
			{deckDetails.newCards > 0 && (
				<ProjectText type="info" variant="light" bold>
					<ProjectIcon
						component={BulbOutlined}
						type="info"
						variant="light"
						size="1rem"
					/>
					{deckDetails.newCards} novos cartões a serem estudados
				</ProjectText>
			)}
			{deckDetails.repeatedCards > 0 && (
				<ProjectText type="warning" bold>
					<ProjectIcon
						component={InfoCircleOutlined}
						type="warning"
						size="1rem"
					/>
					{deckDetails.repeatedCards} cartões a serem revisados
				</ProjectText>
			)}
			{deckDetails.repeatedCards + deckDetails.newCards == 0 && (
				<ProjectText type="success" bold>
					<ProjectIcon component={CheckOutlined} type="success" size="1rem" />
					Não existem cartões a serem estudados nesse baralho, parabéns!
				</ProjectText>
			)}
		</StyledCardCounter>
	);
};

interface CardCounterProps {
	deckDetails: StudentDeck;
}
