import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : "/api";
const API_VERSION = process.env.REACT_APP_API_VERSION
  ? process.env.REACT_APP_API_VERSION
  : "v1";

const api = axios.create({
  baseURL: `${API_URL}/${API_VERSION}`,
});

export default api;
