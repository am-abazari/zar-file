import "server-only";
import axios from "axios";

// Constants
const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "api";
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || "v1";

console.log(API_BASE_URL);
function assertBaseUrl() {
  return API_BASE_URL.endsWith("/") ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
}

const BASE_URL = assertBaseUrl();

const api = axios.create({
  baseURL: `${BASE_URL}/${API_URL}/${API_VERSION}`,
});

export default api;
