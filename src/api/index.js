import axios from "axios";

axios.defaults.baseURL = "http://localhost:10086";
axios.interceptors.response.use(function (res) {
    return res.data;
});
export default axios;