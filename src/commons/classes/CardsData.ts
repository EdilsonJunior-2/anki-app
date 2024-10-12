class CardsData {
  public new: number;
  public repeated: number;

  constructor(props: CardsData) {
    this.new = props.new;
    this.repeated = props.repeated;
  }

  public get hasAnyCardToStudy() {
    return this.new + this.repeated === 0;
  }
}

export default CardsData;
