import axios from "./index";

export function getDetail() {
  return axios.get("/detail?id=6");
}