import { callAPI, urls } from "../../domain/api";

export const getAllPostApi = () => {
  return callAPI(urls.posts, "GET");
};

export const createPostApi = (post) => {
  return callAPI(urls.posts, "POST", {}, {}, post);
};
