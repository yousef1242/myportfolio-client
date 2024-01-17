import axios from "axios";

const request = axios.create({
  baseURL: "https://yousefahmedapi.onrender.com",
});

export default request;