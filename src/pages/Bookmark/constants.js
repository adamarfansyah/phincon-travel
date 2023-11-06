import createActions from "../../redux/createActions";

const prefix = "@@bookmarks";

export const BOOKMARKS = prefix;
export const GET_BOOKMARKS_INIT = createActions(prefix, "init");
export const GET_BOOKMARKS_SUCCESS = createActions(prefix, "getBookmarksSuccess");
export const GET_BOOKMARKS_FAILURE = createActions(prefix, "getBookmarksFailure");

export const SET_BOOKMARKS_SUCCESS = createActions(prefix, "setBookmarkSuccess");
export const SET_BOOKMARKS_FAILURE = createActions(prefix, "setBookmarkFailure");

export const DELETE_BOOKMARK_SUCCESS = createActions(prefix, "deleteBookmarkSuccess");
export const DELETE_BOOKMARK_FAILURE = createActions(prefix, "deleteBookmarkFailure");
