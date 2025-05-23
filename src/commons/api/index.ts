import axios from "axios";
import DeckApi from "./decks";
import AuthApi from "./auth";
import AdminApi from "./admin";
const api = axios.create({
  // "https://terrible-clementia-thatsmytcc-10e74d42.koyeb.app/",
  baseURL: `${
    import.meta.env.VITE_APP_BASE_URL || process.env.VITE_APP_BASE_URL
  }/${import.meta.env.VITE_APP_KEY || process.env.VITE_APP_KEY}`,
});

export default api;

export { AuthApi, DeckApi, AdminApi };
