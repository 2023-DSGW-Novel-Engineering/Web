import axios from "axios";

export const Api = axios.create({
  baseURL: "http://172.16.6.133:9190",
});
