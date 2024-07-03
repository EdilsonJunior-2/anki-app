import api from "./api";

function changeCardRating(card: any, newRating: number) {
	card.rating = newRating;

	if (newRating !== 1) {
		card.repeat = false;
		return;
	}
	card.repeat = true;
}

const sendNewRatings = (cards: any[]): Promise<boolean> =>
	api
		.post("/cards/newRating", { studentId: 1, cards })
		.then(() => {
			return true;
		})
		.catch(() => {
			return false;
		});

const getCards = async (id: number): Promise<any> =>
	await api
		.get(`/student/202100104001/deck/${id}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			throw (err);
		});

export { changeCardRating, sendNewRatings, getCards };
