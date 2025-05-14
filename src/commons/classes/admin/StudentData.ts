import StudentChapter from "./StudentChapter";

export interface StudentDataInterface {
  code: string;
  name: string;
  timestamp: number;
  chapters: StudentChapter[];
}

export interface StudentDataConstructorProps {
  code: string;
  name: string;
  timestamp: string;
  chapters: any[];
}
class StudentData {
  public code: string;
  public name: string;
  public timestamp: number;
  public chapters: StudentChapter[];

  constructor(props: StudentDataConstructorProps) {
    this.code = props.code;
    this.name = props.name;
    this.timestamp = Number(props.timestamp);
    this.chapters = props.chapters.map(
      (chapter, index) =>
        new StudentChapter({
          id: index + 1,
          decks: chapter,
        })
    );
  }
}

export default StudentData;
