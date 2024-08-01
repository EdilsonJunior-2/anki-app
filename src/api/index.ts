import axios from 'axios';

const api = axios.create({
    baseURL: "https://anki-backend-gajj.onrender.com"
    //"http://localhost:3000"
})

export default api; 
