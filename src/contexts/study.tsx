import { ReactNode, createContext, useState } from "react";

import { StudentCard } from "@class";

import { getCards } from "../spacedRepetition";
import { decks } from "@assets";

const StudyContext = createContext<StudyContextData>({} as StudyContextData);

export const StudyProvider = ({ children }: {
    children: ReactNode
}) => {

    const [cards, setCards] = useState<StudentCard[]>([]);
    const [currentChapter, setCurrentChapter] = useState<string>("");
    const [study, letTheStudyBegin] = useState<boolean>(false);

    async function pickCards(id: number, studentCode: string, chapter: string) {
        await getCards(id, studentCode).then((data) => {
            const deckCards = decks[data.cards[0].category - 1]
                .decks
                .find(d => d.id === data.deck)
                ?.cards as any[];
            const cardsToStudy: StudentCard[] = [];
            setCurrentChapter(chapter);
            deckCards.map((card: any) => {
                data.cards.find((c: any) => {
                    if (c.cardId === card.id) {
                        cardsToStudy.push(
                            new StudentCard({ ...card, ...c, repetitions: 1 })
                        );
                        return true;
                    }
                    return false;
                });
            });
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
    currentChapter: string;
    // updateRating(rating: number): void;
}
