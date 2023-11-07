import { call, put, takeLatest } from "redux-saga/effects";
import { GET_POSTS_INIT } from "./constants";
import { getAllPostApi } from "./api";
import { getAllPostsFailureAction, getAllPostsSuccessAction } from "./actions";

function* doGetAllPost() {
  try {
    const response = yield call(getAllPostApi);
    yield put(getAllPostsSuccessAction(response));
  } catch (error) {
    yield put(getAllPostsFailureAction(error));
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_POSTS_INIT, doGetAllPost);
}
