export interface CardRecordProps {
  interval: number;
  difficulty_rating: number;
  rating_date: number;
  next_study_date: number;
}

class CardRecord {
  public interval: number;
  public difficultyRating: number;
  private rating_date: number;
  private next_study_date: number;

  constructor(props: CardRecordProps) {
    this.interval = props.interval;
    this.difficultyRating = props.difficulty_rating;
    this.rating_date = props.rating_date;
    this.next_study_date = props.next_study_date;
  }

  public get ratingDate() {
    const date = new Date(this.rating_date);
    return `${date.getUTCDate()}/${
      date.getUTCMonth() + 1
    }/${date.getUTCFullYear()}`;
  }
  public get nextStudyDate() {
    const date = new Date(this.next_study_date);
    return `${date.getUTCDate()}/${
      date.getUTCMonth() + 1
    }/${date.getUTCFullYear()}`;
  }
}

export default CardRecord;
