import axios from "axios";

const BASE_URL = "https://get-request-news.onrender.com";

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};
