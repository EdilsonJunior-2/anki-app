import { CardStatus } from "@enums";
import StudentCard, { StudentCardProps } from "./StudentCard";

export interface StudentDeckProps {
  id: number;
  cards: StudentCardProps[];
}

interface StudentDeckConstructorProps {
  id: number;
  cards: any[];
}

class StudentDeck {
  public id: number;
  public cards: StudentCard[];

  constructor(props: StudentDeckConstructorProps) {
    this.id = props.id;
    this.cards = props.cards.map((card) => new StudentCard(card));
  }

  public get statusCount() {
    return {
      new: this.cards.filter(
        (card: StudentCard) => card.status === CardStatus.new
      ).length,
      studied: this.cards.filter(
        (card: StudentCard) => card.status === CardStatus.studied
      ).length,
      learned: this.cards.filter(
        (card: StudentCard) => card.status === CardStatus.learned
      ).length,
      relearned: this.cards.filter(
        (card: StudentCard) => card.status === CardStatus.relearned
      ).length,
      reviewed: this.cards.filter(
        (card: StudentCard) => card.status === CardStatus.reviewed
      ).length,
    };
  }
}

export default StudentDeck;
