import api from "..";
import { StudentDeck } from "@interface";

const studentDecksInfo = async (studentCode: string): Promise<StudentDeck[]> => {
    const res = await api.get(`/studentDecksInfo/${studentCode}`);
    return res.data;
}

export default {
    studentDecksInfo
}