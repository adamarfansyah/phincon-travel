import {
  DELETE_BOOKMARK_FAILURE,
  DELETE_BOOKMARK_SUCCESS,
  FILTER_BOOKMARKS,
  GET_BOOKMARKS_FAILURE,
  GET_BOOKMARKS_INIT,
  GET_BOOKMARKS_SUCCESS,
  SET_BOOKMARKS_FAILURE,
  SET_BOOKMARKS_SUCCESS,
} from "./constants";

export const getBookmarksAction = () => ({
  type: GET_BOOKMARKS_INIT,
});

export const getAllBookmarksSuccessAction = (bookmarks) => ({
  type: GET_BOOKMARKS_SUCCESS,
  bookmarks,
});

export const getAllBookmarksFailureAction = (error) => ({
  type: GET_BOOKMARKS_FAILURE,
  error,
});

export const createBookmarkAction = (bookmark) => ({
  type: SET_BOOKMARKS_SUCCESS,
  bookmark,
});

export const createBookmarkFailureAction = (error) => ({
  type: SET_BOOKMARKS_FAILURE,
  error,
});

export const deleteBookmarkAction = (bookmarkId) => ({
  type: DELETE_BOOKMARK_SUCCESS,
  bookmarkId,
});

export const deleteBookmarkFailureAction = (error) => ({
  type: DELETE_BOOKMARK_FAILURE,
  error,
});

export const filteredBookmarkAction = (userId) => ({
  type: FILTER_BOOKMARKS,
  userId,
});
