import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9dfc3938553643319619e0266a04b469",
  },
});

export default apiClient;
