import StudentDeck, { StudentDeckProps } from "./StudentDeck";

export interface StudentChapterProps {
  id: number;
  decks: StudentDeckProps[];
}

interface StudentChapterConstructorProps {
  id: number;
  decks: any[];
}

class StudentChapter {
  public id: number;
  public decks: StudentDeck[];
  constructor(props: StudentChapterConstructorProps) {
    this.id = props.id;
    this.decks = props.decks.map(
      (deck, index) => new StudentDeck({ id: index + 1, cards: deck })
    );
  }
}

export default StudentChapter;
