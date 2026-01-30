import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.API_URL}/${process.env.API_VERSION}`,
});

export default api;
