import api from "@api";

async function getStudentData(code: string, studentCode: string) {
  const res = await api.get(`admin/${code}/${studentCode}`);
  return res.data;
}

const getStudentsData = async (code: string) => {
  const res = await api.get(`admin/${code}/students`);
  return res.data;
};

export default { getStudentData, getStudentsData };
