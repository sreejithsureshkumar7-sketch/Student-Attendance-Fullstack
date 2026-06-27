import axios from "axios";
const API_BASE = "https://student-attendance-backend-2uwc.onrender.com/api";
const API = axios.create({ baseURL: API_BASE });
API.interceptors.request.use((config)=>{const token=localStorage.getItem("token");if(token)config.headers.Authorization=`Bearer ${token}`;return config});
export default API;
