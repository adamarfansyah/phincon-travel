import { callAPI, urls } from "../../domain/api";

export const getAllPostApi = () => {
  return callAPI(urls.posts, "GET");
};

// export const createPost = (post) => {
//   return callAPI(urls.posts, "POST", {}, {}, post);
// };
