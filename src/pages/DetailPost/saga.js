import { call, put, takeLatest } from "redux-saga/effects";
import { GET_POST_INIT } from "./constants";
import { getPostApi } from "./api";
import { getAllPostFailureAction, getAllPostSuccessAction } from "./actions";

function* doGetPost({ postId }) {
  try {
    const response = yield call(getPostApi, postId);
    yield put(getAllPostSuccessAction(response));
  } catch (error) {
    yield put(getAllPostFailureAction(error));
  }
}

export default function* detailPostSaga() {
  yield takeLatest(GET_POST_INIT, doGetPost);
}
