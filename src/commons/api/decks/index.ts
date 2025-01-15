import api from "..";
import { Chapter } from "@class";

const studentDecksInfo = async (studentCode: string): Promise<Chapter[]> => {
  const res = await api.get(`/study/decksInfo/${studentCode}`);
  return res.data;
};

export default {
  studentDecksInfo,
};
