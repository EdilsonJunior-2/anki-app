import axios from 'axios';

const api = axios.create({
    baseURL: "https://terrible-clementia-thatsmytcc-10e74d42.koyeb.app/"
    // "https://anki-backend-gajj.onrender.com"
    //"http://localhost:3000"
})

export default api; 
