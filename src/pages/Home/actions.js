import { GET_POSTS_FAILURE, GET_POSTS_INIT, GET_POSTS_SUCCESS, SEARCH_POST } from "./constants";

export const initGetAllPosts = () => ({
  type: GET_POSTS_INIT,
});

export const getAllPostsSuccessAction = (posts) => ({
  type: GET_POSTS_SUCCESS,
  posts,
});

export const getAllPostsFailureAction = (error) => ({
  type: GET_POSTS_FAILURE,
  error,
});

export const searchPost = (value) => ({
  type: SEARCH_POST,
  value,
});
