import { ReactNode, createContext, useState } from "react";

import { StudentDeck } from "@interface";
import { Student } from "@class";

const StudentContext = createContext<StudentData>({} as StudentData);

export const StudentProvider = ({ children }: {
    children: ReactNode
}) => {

    const [student, setStudent] = useState<Student | null>(null);
    const [studentDecks, setStudentDecks] = useState<StudentDeck[] | null>(null);

    return (
        <StudentContext.Provider value={{ student, setStudent, studentDecks, setStudentDecks }}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentContext;

interface StudentData {
    student: Student | null;
    setStudent: (s: Student) => void;
    studentDecks: StudentDeck[] | null;
    setStudentDecks: (sd: StudentDeck[]) => void;
}
