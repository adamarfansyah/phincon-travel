import { callAPI, urls } from "../../domain/api";

export const getProfilesApi = () => {
  return callAPI(urls.profile, "GET");
};
