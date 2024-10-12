class Card {
  public id: string;
  public question: string;
  public answer: string;
  public requiresImage: boolean;

  constructor(props: Card) {
    this.id = props.id;
    this.answer = props.answer;
    this.question = props.question;
    this.requiresImage = props.requiresImage;
  }
}

export default Card;
