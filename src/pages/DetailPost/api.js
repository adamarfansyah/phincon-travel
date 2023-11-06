import { callAPI, urls } from "../../domain/api";

export const getPostApi = (postId) => {
  return callAPI(`${urls.posts}/${postId}`, "GET");
};
