import { useContext, useEffect, useState } from "react";
import { Input } from "antd";

import { AuthApi } from "@api";
import { StudentContext } from "@context";
import { Student } from "@class";

import "./styles.scss";

export default () => {

	const [code, setCode] = useState<string>("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const { setStudent } = useContext(StudentContext);
	const { login } = AuthApi;

	useEffect(() => {
		const user = window.sessionStorage.getItem("@user");
		if (user)
			setStudent(JSON.parse(user));
	}, []);
	function log() {
		setLoading(true);
		setTimeout(async () => {
			await login(code)
				.then((res: Student) => {
					setStudent(res);
					setError(null);
				})
				.catch((err) => setError(err.response.data));
			setLoading(false);
		}, 500);
	}
	return (
		<main className="login-view">
			<article>
				<h2>Bem vindo!</h2>
				<h3>Entre com sua matrícula para continuar:</h3>
				<Input
					disabled={loading}
					size="large"
					status={error ? "error" : ""}
					placeholder="matrícula"
					value={code}
					onPressEnter={log}
					onChange={(e) => setCode(e.target.value)}
				/>
				{error && <p>{error}</p>}
				<button type="button" disabled={loading} onClick={log}>
					Entrar
				</button>
			</article>
		</main>
	);
};
