import { callAPI, urls } from "../../domain/api";

export const createProfileApi = (data) => {
  return callAPI(urls.profile, "POST", {}, {}, data);
};
