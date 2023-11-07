/* eslint-disable no-case-declarations */
import { produce } from "immer";
import {
  DELETE_USER_LOGIN_FAILURE,
  DELETE_USER_LOGIN_SUCCESS,
  GET_USER_LOGIN_FAILURE,
  GET_USER_LOGIN_INIT,
  GET_USER_LOGIN_SUCCESS,
  POST_USER_LOGIN_FAILURE,
  POST_USER_LOGIN_SUCCESS,
} from "./constants";

export const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  isError: "",
};

const userLoginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_USER_LOGIN_INIT:
        draft.isLoading = true;
        break;
      case GET_USER_LOGIN_SUCCESS:
        draft.isLoading = false;
        draft.isLoggedIn = true;
        draft.user = action.user;
        break;
      case GET_USER_LOGIN_FAILURE:
        draft.isLoading = false;
        draft.isLoggedIn = false;
        draft.isError = action.isError;
        break;
      case DELETE_USER_LOGIN_SUCCESS:
        draft.isLoading = false;
        draft.isLoggedIn = false;
        draft.user = {};
        localStorage.removeItem("user");
        break;
      case DELETE_USER_LOGIN_FAILURE:
        draft.isLoading = false;
        draft.user = {};
        draft.isLoggedIn = false;
        draft.isError = action.error;
        localStorage.removeItem("user");
        break;
      case POST_USER_LOGIN_SUCCESS:
        draft.isLoading = false;
        draft.isLoggedIn = true;
        draft.user = action.user;
        localStorage.setItem("user", JSON.stringify(action.user));
        break;
      case POST_USER_LOGIN_FAILURE:
        draft.isLoading = false;
        draft.user = action.error;
        break;
    }
  });

export default userLoginReducer;
