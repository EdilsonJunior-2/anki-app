import { ReactNode, createContext, useState } from "react";
import Student from "../classes/student";

const StudentContext = createContext<StudentData>({} as StudentData);

export const StudentProvider = ({ children }: {
    children: ReactNode
}) => {

    const [student, setStudent] = useState<Student | null>(null);

    return (
        <StudentContext.Provider value={{ student, setStudent }}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentContext;

interface StudentData {
    student: Student | null;
    setStudent: (s: Student) => void;
}
