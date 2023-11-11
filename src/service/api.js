import axios from "axios";
import { getItem } from "../helpers/persintage-storage";
axios.defaults.baseURL = "https://api.realworld.io/api";
export default axios;

axios.interceptors.request.use((config) => {
  const token = getItem("Token");
  const authorization = token ? `Token ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});
