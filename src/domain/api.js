import axios from "axios";

const baseURL = "http://localhost:3000";

export const urls = {
  posts: "/posts",
  bookmarks: "/bookmarks",
  profile: "/profile",
  login: "/login",
};

export const callAPI = async (endpoint, method, params = {}, headers = {}, data = {}) => {
  const options = {
    baseURL,
    url: endpoint,
    method,
    params,
    headers,
    data,
  };

  const response = await axios(options);
  return response?.data;
};
