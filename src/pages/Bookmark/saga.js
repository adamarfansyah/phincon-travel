import { call, put, takeLatest } from "redux-saga/effects";
import { DELETE_BOOKMARK_SUCCESS, GET_BOOKMARKS_INIT, SET_BOOKMARKS_SUCCESS } from "./constants";
import { createBookmarkApi, deleteBookmarkApi, getBookmarksApi } from "./api";
import {
  createBookmarkAction,
  createBookmarkFailureAction,
  deleteBookmarkAction,
  deleteBookmarkFailureAction,
  getAllBookmarksFailureAction,
  getAllBookmarksSuccessAction,
} from "./actions";

function* doGetBookmarks() {
  try {
    const response = yield call(getBookmarksApi);
    yield put(getAllBookmarksSuccessAction(response));
  } catch (error) {
    yield console.log({ error });
    yield put(getAllBookmarksFailureAction(error));
  }
}

function* doCreateBookmark({ bookmark }) {
  try {
    const response = yield call(createBookmarkApi, bookmark);
    yield put(createBookmarkAction(response));
  } catch (error) {
    yield put(createBookmarkFailureAction(error));
  }
}

function* doDeleteBookmark({ bookmarkId }) {
  try {
    const response = yield call(deleteBookmarkApi, bookmarkId);
    yield put(deleteBookmarkAction(response));
  } catch (error) {
    yield put(deleteBookmarkFailureAction(error));
  }
}

export default function* bookmarksSaga() {
  yield takeLatest(GET_BOOKMARKS_INIT, doGetBookmarks);
  yield takeLatest(SET_BOOKMARKS_SUCCESS, doCreateBookmark);
  yield takeLatest(DELETE_BOOKMARK_SUCCESS, doDeleteBookmark);
}
