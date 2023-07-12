import axios from "axios";

export const Api = axios.create({
  baseURL: "http://192.168.191.47:3000",
});
