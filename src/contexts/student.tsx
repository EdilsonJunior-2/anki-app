import { ReactNode, createContext, useEffect, useState } from "react";
import { Chapter, Student } from "@classes";

const StudentContext = createContext<StudentData>({} as StudentData);

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [student, setStudent] = useState<Student | null>();
  const [chapters, setChapters] = useState<Chapter[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const user = window.sessionStorage.getItem(
      `@${import.meta.env.VITE_APP_KEY || process.env.VITE_APP_BASE_URL}_user`
    );
    if (user) {
      setStudent(JSON.parse(user));
    } else setStudent(null);
    setLoading(false);
  }, []);
  return (
    <StudentContext.Provider
      value={{
        student,
        setStudent,
        chapters,
        setChapters,
        loading,
        setLoading,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;

interface StudentData {
  student: Student | null | undefined;
  setStudent: (s: Student) => void;
  chapters: Chapter[] | null;
  setChapters: (sd: Chapter[] | null) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
}
