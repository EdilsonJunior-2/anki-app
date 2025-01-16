class Student {
  id: number;
  name: string;
  code: string;
  admin: boolean;

  constructor(props: Student) {
    this.name = props.name;
    this.code = props.code;
    this.id = props.id;
    this.admin = props.admin;
  }
}

export default Student;
