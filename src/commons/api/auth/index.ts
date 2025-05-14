import api from "..";
import { Student } from "@classes";

const login = async (code: string): Promise<Student> => {
  const res = await api.post(`/login`, { code });
  const student = res.data.user;
  window.sessionStorage.setItem(
    `@${import.meta.env.VITE_APP_KEY || process.env.VITE_APP_BASE_URL}_token`,
    res.data.token
  );
  window.sessionStorage.setItem(
    `@${import.meta.env.VITE_APP_KEY || process.env.VITE_APP_BASE_URL}_user`,
    JSON.stringify(res.data.user)
  );
  return student;
};

export default { login };
