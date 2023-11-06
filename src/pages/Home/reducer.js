/* eslint-disable no-case-declarations */
import { produce } from "immer";
import { GET_POSTS_FAILURE, GET_POSTS_INIT, GET_POSTS_SUCCESS } from "./constants";

export const initialState = {
  posts: [],
  isLoading: false,
  isError: "",
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_POSTS_INIT:
        draft.isLoading = true;
        break;
      case GET_POSTS_SUCCESS:
        draft.isLoading = false;
        draft.posts = action.posts;
        break;
      case GET_POSTS_FAILURE:
        draft.isLoading = false;
        draft.posts = [];
        draft.isError = action.error;
        break;
    }
  });

export default homeReducer;
