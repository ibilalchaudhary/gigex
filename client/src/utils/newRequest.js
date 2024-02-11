import axios from "axios";

const backendUrl = process.env.BACKEND_URL;

const newRequest = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
});

export default newRequest;