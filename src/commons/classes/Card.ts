class Card {
  public id: string;
  public question: string;
  public answer: string;

  constructor(props: Card) {
    this.id = props.id;
    this.answer = props.answer;
    this.question = props.question;
  }
}

export default Card;
