import axios from "./index";

export function getSliders() {
    return axios.get("/home");
}