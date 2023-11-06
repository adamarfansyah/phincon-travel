import { CREATE_POST_SUCCESS, CREATE_POST_FAILURE } from "./constants";

export const createPostAction = (post) => ({
  type: CREATE_POST_SUCCESS,
  post,
});

export const createPostFailureAction = (error) => ({
  type: CREATE_POST_FAILURE,
  error,
});
