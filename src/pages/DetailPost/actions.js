import { GET_POST_FAILURE, GET_POST_INIT, GET_POST_SUCCESS } from "./constants";

export const initGetPost = (postId) => ({
  type: GET_POST_INIT,
  postId,
});

export const getAllPostSuccessAction = (post) => ({
  type: GET_POST_SUCCESS,
  post,
});

export const getAllPostFailureAction = (error) => ({
  type: GET_POST_FAILURE,
  error,
});
