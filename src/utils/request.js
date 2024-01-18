import axios from "axios";

const request = axios.create({
  baseURL: "https://handsome-threads-lamb.cyclic.app",
});

export default request;