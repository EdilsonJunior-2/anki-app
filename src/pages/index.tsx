import { useContext } from "react";
import StudyContext from "../contexts/study";
import CardViewer from "./CardViewer";
import DeckSelector from "./DeckSelector";
import StudentContext from "../contexts/student";
import Login from "./Login";


const Pages = () => {
	const { study } = useContext(StudyContext);
	const { student } = useContext(StudentContext);
	return student ? study ? <CardViewer /> : <DeckSelector /> : <Login />

}

export default Pages;
