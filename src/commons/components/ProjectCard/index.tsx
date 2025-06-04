import { ReactNode } from "react";
import StyledCard, { StyledCardProps } from "./styles";

export default ({
  children,
  wrap,
  ...props
}: ProjectCardProps & StyledCardProps) => (
  <StyledCard wrap={wrap} {...props}>
    {children}
  </StyledCard>
);

interface ProjectCardProps {
  title: string | ReactNode;
  children: ReactNode;
  actions: ReactNode[];
  wrap?: boolean;
}
