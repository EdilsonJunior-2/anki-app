import api from "..";
import Student from "../../classes/student";

const login = async (code: string): Promise<Student> => {
	const res = await api.post("/login", { code });
	const student = res.data.user;
	window.sessionStorage.setItem("@token", res.data.token);
	window.sessionStorage.setItem("@user", JSON.stringify(res.data.user));
	return student;
}

export { login };
