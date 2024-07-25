import axios from 'axios';

const api = axios.create({
    baseURL: "https://anki-backend-gajj.onrender.com"
})

export default api; 
