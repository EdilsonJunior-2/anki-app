import { ReactNode, createContext, useState } from "react";

import { StudentCard } from "@class";

import { getCards } from "../spacedRepetition";

const StudyContext = createContext<StudyContextData>({} as StudyContextData);

export const StudyProvider = ({ children }: {
    children: ReactNode
}) => {

    const [cards, setCards] = useState<StudentCard[]>([]);
    const [currentChapter, setCurrentChapter] = useState<number>(0);
    const [study, letTheStudyBegin] = useState<boolean>(false);

    async function pickCards(id: number, studentCode: string) {
        await getCards(id, studentCode).then((data) => {
            console.log(data)
            const cardsToStudy = data.cards.map((card: any) => (
                new StudentCard({ ...card, repetitions: 1 })
            ));
            setCurrentChapter(data.deck)
            setCards(cardsToStudy);
            letTheStudyBegin(true);
        });
    }

    return (
        <StudyContext.Provider value={{ study, letTheStudyBegin, cards, setCards, pickCards, currentChapter }}>
            {children}
        </StudyContext.Provider>
    )
}

export default StudyContext;

interface StudyContextData {
    study: boolean;
    letTheStudyBegin: (study: boolean) => void;
    cards: any[];
    setCards: (cards: any[]) => void;
    pickCards: (id: number, studentCode: string, chapter: string) => void;
    currentChapter: number;
    // updateRating(rating: number): void;
}
