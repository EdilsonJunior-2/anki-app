import api from "@api";

function changeCardRating(card: any, newRating: number) {
  card.rating = newRating;

  if (newRating !== 1) {
    card.repeat = false;
    return;
  }
  card.repeat = true;
}

const sendNewRatings = (cards: any[], studentCode: string): Promise<boolean> =>
  api
    .post("/updateRecords", { studentCode, cards })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });

const getCards = async (id: number, studentCode: string): Promise<any> =>
  await api
    .get(`/study/${studentCode}/${id}`)
    .then((res: any) => {
      return res.data;
    })
    .catch((err: any) => {
      throw err;
    });

export { changeCardRating, sendNewRatings, getCards };
