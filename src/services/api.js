import axios from "axios";

const api = axios.create({
    baseURL: 'https://al-car-back-end.onrender.com/api'
})

export default api;