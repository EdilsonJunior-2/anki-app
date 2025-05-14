import { getCardStatus } from "@utils";
import CardRecord from "./CardRecord";

export interface StudentCardProps {
  id: number;
  record: string;
}

interface StudentCardConstructorProps {
  card: number;
  record: string;
}

class StudentCard {
  public id: number;
  public record: CardRecord[];
  constructor(props: StudentCardConstructorProps) {
    this.id = props.card;

    const records = JSON.parse(props.record);
    this.record = records.map((r: any) => new CardRecord(r));
  }

  public get status() {
    return getCardStatus(this.record);
  }
}

export default StudentCard;
