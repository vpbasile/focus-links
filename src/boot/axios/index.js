import axios from "axios";
import store from "../../redux";
import handleErrors from "./handleErrors";
import { server } from "../../constants";

const token = localStorage.getItem("token");

axios.defaults.baseURL = `${server}/api`;
axios.defaults.headers["Content-Type"] = "application/json";
if (token !== null) {
  axios.defaults.headers["x-auth-token"] = token;
}

const handleLoading = (type = "") => {
  store.dispatch({ type, data: [] });
};

axios.interceptors.request.use(
  (request) => {
    handleLoading("SHOW_LOADING");
    return request;
  },
  (error) => {
    handleLoading("SHOW_LOADING");
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    handleLoading("HIDE_LOADING");
    return response;
  },
  (error) => {
    handleErrors(error);
    handleLoading("HIDE_LOADING");
    return Promise.reject(error);
  }
);

export default axios;
