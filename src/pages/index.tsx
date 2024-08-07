import { useContext } from "react";

import { StudyContext, StudentContext } from "@context";

import CardViewer from "./CardViewer";
import DeckSelector from "./DeckSelector";
import Login from "./Login";

const Pages = () => {
	const { study } = useContext(StudyContext);
	const { student } = useContext(StudentContext);
	return student ? study ? <CardViewer /> : <DeckSelector /> : <Login />

}

export default Pages;
