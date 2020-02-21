import axios from "axios";
import { stringify } from "query-string";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  paramsSerializer: params => stringify(params)
});

export default httpClient;
