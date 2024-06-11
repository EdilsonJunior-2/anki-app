import { Card } from "ts-fsrs";
import ProjectCard from "./CardClass";

class Student {
  name: string;
  registration: string;
  cards: ProjectCard[];

  constructor(props: { name: string; registration: string }) {
    this.name = props.name;
    this.registration = props.registration;
    this.cards = [];
  }

  addCard(card: any) {
    this.cards.push(card);
  }

  upadateCardGrade(card: Card) {
  }
}

export default Student;
