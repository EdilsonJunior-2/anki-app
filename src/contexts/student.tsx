import { ReactNode, createContext, useState } from "react";
import { Chapter, Student } from "@class";

const StudentContext = createContext<StudentData>({} as StudentData);

export const StudentProvider = ({ children }: {
    children: ReactNode
}) => {

    const [student, setStudent] = useState<Student | null>(null);
    const [chapters, setChapters] = useState<Chapter[] | null>(null);

    return (
        <StudentContext.Provider value={{ student, setStudent, chapters, setChapters }}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentContext;

interface StudentData {
    student: Student | null;
    setStudent: (s: Student) => void;
    chapters: Chapter[] | null;
    setChapters: (sd: Chapter[] | null) => void;
}
