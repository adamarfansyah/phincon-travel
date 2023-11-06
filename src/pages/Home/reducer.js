/* eslint-disable no-case-declarations */
import { produce } from "immer";
import { GET_POSTS_FAILURE, GET_POSTS_INIT, GET_POSTS_SUCCESS, SEARCH_POST } from "./constants";

export const initialState = {
  posts: [],
  isLoading: false,
  isError: "",
  value: "",
  filteredPost: [],
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
      case SEARCH_POST:
        const { value } = action;
        const post = state.posts.filter((val) => val.title.includes(value));
        draft.filteredPost = post;
        draft.value = value;
        if (value === "") {
          draft.filteredPost = [];
        }
        break;
    }
  });

export default homeReducer;
