import Card from "./Card";
import CardsData from "./CardsData";
class Deck {
  public id: number;
  public name: string;
  public image: string;
  public cardsData: CardsData;
  public cards?: Card[];
  constructor(props: Deck) {
    this.id = props.id;
    this.name = props.name;
    this.image = props.image;
    this.cardsData = props.cardsData;
    this.cards = props.cards;
  }
}

export default Deck;
