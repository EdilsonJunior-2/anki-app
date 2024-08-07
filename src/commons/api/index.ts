import axios from 'axios';
import DeckApi from "./decks";
import AuthApi from "./auth";

const api = axios.create({
    baseURL: "http://localhost:3000"
    //"https://terrible-clementia-thatsmytcc-10e74d42.koyeb.app/"
    // "https://anki-backend-gajj.onrender.com"
    //"http://localhost:3000"
})

export default api;

export {
    AuthApi,
    DeckApi
}