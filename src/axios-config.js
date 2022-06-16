import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
client.interceptors.request.use(
  async (config) => {
    let token = window.localStorage.getItem("token");
    if (token) {
      config.headers.authorization = "Bearer " + token ?? "";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default client;
