import {
  GET_USER_LOGIN_FAILURE,
  GET_USER_LOGIN_SUCCESS,
  GET_USER_LOGIN_INIT,
  DELETE_USER_LOGIN_SUCCESS,
  DELETE_USER_LOGIN_FAILURE,
  POST_USER_LOGIN_SUCCESS,
  POST_USER_LOGIN_FAILURE,
} from "./constants";

export const getUserLoginInitAction = (userId) => ({
  type: GET_USER_LOGIN_INIT,
  userId,
});

export const getUserLoginSuccesAction = (user) => ({
  type: GET_USER_LOGIN_SUCCESS,
  user,
});

export const getUserLoginFailureAction = (error) => ({
  type: GET_USER_LOGIN_FAILURE,
  error,
});

export const postUserLoginAction = (user) => ({
  type: POST_USER_LOGIN_SUCCESS,
  user,
});

export const postUserLoginFailureAction = (error) => ({
  type: POST_USER_LOGIN_FAILURE,
  error,
});

export const deleteUserLoginAction = (userId) => ({
  type: DELETE_USER_LOGIN_SUCCESS,
  userId,
});

export const deleteUserLoginFailureAction = (error) => ({
  type: DELETE_USER_LOGIN_FAILURE,
  error,
});
