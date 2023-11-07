import { call, put, takeLatest } from "redux-saga/effects";
import { CREATE_POST_SUCCESS } from "./constants";
import { createPostApi } from "./api";
import { createPostFailureAction, createPostAction } from "./actions";

function* doCreatePost({ post }) {
  try {
    const response = yield call(createPostApi, post);
    yield put(createPostAction(response));
  } catch (error) {
    yield put(createPostFailureAction(error));
  }
}

export default function* newJourneySaga() {
  yield takeLatest(CREATE_POST_SUCCESS, doCreatePost);
}
