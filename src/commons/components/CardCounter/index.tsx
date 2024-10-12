import {
	BulbOutlined,
	CheckOutlined,
	InfoCircleOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { LoadingContext, StudentContext } from "@context";
import { Skeleton } from "antd";
import StyledCardCounter from "./styles";
import ProjectIcon from "../ProjectIcon";
import ProjectText from "../ProjectText";
import { CardsData } from "@class";

export default (props: CardCounterProps) => {
	const { deckDetails } = props;
	const { loading } = useContext(LoadingContext);
	const { chapters } = useContext(StudentContext);
	return (
		<StyledCardCounter>
			<Skeleton
				active
				loading={loading && !chapters}
				paragraph={{ rows: 1 }}
				title={false}
			/>
			{deckDetails.new > 0 && (
				<ProjectText type="info" variant="light" weight="bold">
					<ProjectIcon
						component={BulbOutlined}
						type="info"
						variant="light"
					/>
					{deckDetails.new} novos cartões a serem estudados
				</ProjectText>
			)}
			{deckDetails.repeated > 0 && (
				<ProjectText type="warning">
					<ProjectIcon
						component={InfoCircleOutlined}
						type="warning"
					/>
					{deckDetails.repeated} cartões a serem revisados
				</ProjectText>
			)}
			{deckDetails.repeated + deckDetails.new == 0 && (
				<ProjectText type="success">
					<ProjectIcon component={CheckOutlined} type="success" />
					Não existem cartões a serem estudados nesse baralho, parabéns!
				</ProjectText>
			)}
		</StyledCardCounter>
	);
};

interface CardCounterProps {
	deckDetails: CardsData;
}
