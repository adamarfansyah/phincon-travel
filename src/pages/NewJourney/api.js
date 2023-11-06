import { callAPI, urls } from "../../domain/api";

export const createPostApi = (post) => {
  return callAPI(urls.posts, "POST", {}, {}, post);
};
