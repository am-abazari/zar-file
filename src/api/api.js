import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "/api";

const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION
  ? process.env.NEXT_PUBLIC_API_VERSION
  : "v1";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : "http://localhost:3000";
console.log(BASE_URL);
const api = axios.create({
  baseURL: `${BASE_URL}/${API_URL}/${API_VERSION}`,
});

export default api;
