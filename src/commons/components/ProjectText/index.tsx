import { ReactNode } from "react";
import StyledText, { StyledTextProps } from "./styles"

export default (({ children, ...props }: ProjectTextProps) => {
    return <StyledText {...props}>{children}</StyledText>
});

interface ProjectTextProps extends StyledTextProps {
    children: ReactNode;
}