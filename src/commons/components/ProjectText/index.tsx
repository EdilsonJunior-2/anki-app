import { ReactNode } from "react";
import { StyledTitle, StyledText, StyledTitleProps } from "./styles";

export default ({ children, headerLevel, ...props }: ProjectTextProps) => {
	return headerLevel ? (
		<StyledTitle {...props} level={headerLevel}>{children}</StyledTitle>
	) : (
		<StyledText {...props}>{children}</StyledText>
	);
};

interface ProjectTextProps extends StyledTitleProps {
	children: ReactNode;
}
