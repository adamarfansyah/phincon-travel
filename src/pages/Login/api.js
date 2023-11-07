import { callAPI, urls } from "../../domain/api";

export const loginApi = (user) => {
  return callAPI(urls.login, "POST", {}, {}, user);
};

export const getUserLogin = (userId) => {
  return callAPI(`${urls.login}/${userId}`, "GET");
};

export const logoutApi = (userId) => {
  return callAPI(`${urls.login}/${userId}`, "DELETE");
};
