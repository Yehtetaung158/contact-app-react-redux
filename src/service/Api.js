import axios from "axios";
import { API_Url } from "../lib/contant";

export const api = axios.create({
  baseURL: API_Url,
  headers: {
    Authorization:
      localStorage.getItem("auth") &&
      `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
  },
});