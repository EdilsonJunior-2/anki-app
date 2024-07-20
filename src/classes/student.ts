class Student {
  id: number;
  name: string;
  code: string;

  constructor(props: Student) {
    this.name = props.name;
    this.code = props.code;
    this.id = props.id;
  }
}

export default Student;
