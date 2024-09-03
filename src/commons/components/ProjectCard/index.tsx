import { ReactNode } from "react";
import StyledCard, { StyledCardProps } from "./styles";

export default ({ children, ...props }: ProjectCardProps & StyledCardProps) => (

	<StyledCard {...props}>
		{children}
	</StyledCard>
);

interface ProjectCardProps {
	title: string | ReactNode;
	children: ReactNode;
	actions: ReactNode[];
}
