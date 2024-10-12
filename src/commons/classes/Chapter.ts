import Deck from "./Deck";

class Chapter {
  public id: number;
  public name: string;
  public decks: Deck[];
  constructor(props: Chapter) {
    this.id = props.id;
    this.name = props.name;
    this.decks = props.decks;
  }
}

export default Chapter;
