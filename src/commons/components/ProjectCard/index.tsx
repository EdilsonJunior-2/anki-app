import { Card } from "antd";
import { ReactNode } from "react";
import "./styles.scss";

export default ({ title, children, actions }: ProjectCardProps) => (
	<Card className="project-card" title={title} actions={actions}>
		{children}
	</Card>
);

interface ProjectCardProps {
	title: string | ReactNode;
	children: ReactNode;
	actions: ReactNode[];
}
