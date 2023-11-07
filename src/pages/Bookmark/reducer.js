/* eslint-disable no-case-declarations */
import { produce } from "immer";
import {
  DELETE_BOOKMARK_FAILURE,
  DELETE_BOOKMARK_SUCCESS,
  GET_BOOKMARKS_FAILURE,
  GET_BOOKMARKS_INIT,
  GET_BOOKMARKS_SUCCESS,
  SET_BOOKMARKS_FAILURE,
  SET_BOOKMARKS_SUCCESS,
  FILTER_BOOKMARKS,
} from "./constants";

export const initialState = {
  bookmarks: [],
  filteredBookmarks: [],
  isLoading: false,
  isError: "",
};

const bookmarksReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_BOOKMARKS_INIT:
        draft.isLoading = true;
        break;
      case GET_BOOKMARKS_SUCCESS:
        draft.isLoading = false;
        draft.bookmarks = action.bookmarks;
        break;
      case GET_BOOKMARKS_FAILURE:
        draft.isLoading = false;
        draft.bookmarks = [];
        draft.isError = action.error;
        break;
      case SET_BOOKMARKS_SUCCESS:
        const newBookmark = [...state.bookmarks, action.bookmark];
        draft.bookmarks = newBookmark;
        break;
      case SET_BOOKMARKS_FAILURE:
        draft.isError = action.error;
        break;
      case DELETE_BOOKMARK_SUCCESS:
        const bookmarkIdToDelete = action.bookmarkId;
        draft.bookmarks = draft.bookmarks.filter((bookmark) => bookmark.id !== bookmarkIdToDelete);
        break;
      case DELETE_BOOKMARK_FAILURE:
        draft.isError = action.error;
        break;
      case FILTER_BOOKMARKS:
        const { userId } = action;
        draft.filteredBookmarks = draft.bookmarks.filter((bookmark) => bookmark.userId === userId);
        break;
    }
  });

export default bookmarksReducer;
