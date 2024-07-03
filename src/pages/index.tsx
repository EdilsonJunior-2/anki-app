import { useContext } from "react";
import StudyContext from "../contexts/study";
import CardViewer from "../commons/CardViewer";
import DeckSelector from "./DeckSelector";


const Pages = () => {
    const { study } = useContext(StudyContext);
    return study ? <CardViewer /> : <DeckSelector />

}

export default Pages;