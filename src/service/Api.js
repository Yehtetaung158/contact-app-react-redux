import axios from "axios";
import { API_Url } from "../lib/contant";


export const api=axios.create({
    baseURL:API_Url
})