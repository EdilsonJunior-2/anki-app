import ProjectCard from "./CardClass";

class Deck {
    public type: string;
    public cards: ProjectCard[];

    constructor(props: { type: string, cards: ProjectCard[] }) {
        this.type = props.type;
        this.cards = props.cards;
    }

    public addCards(newCards: ProjectCard[]): void {
        this.cards = this.cards.concat(newCards);
    }
}

export default Deck;