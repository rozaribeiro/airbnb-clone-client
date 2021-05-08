import axios from "axios";

//Connection to database
const api = axios.create({
  baseURL: `http://localhost:8000/`,
});

// A U T H E N T I C A T E

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});
export default api;
