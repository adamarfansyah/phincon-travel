import { call, put, takeLatest } from "redux-saga/effects";
import { GET_POST_INIT } from "./constants";
import { getPostApi } from "./api";
import { getAllPostFailureAction, getAllPostSuccessAction } from "./actions";
// import { getAllPost, createPost } from "../../domain/api";
// import { setAllPost, setNewPost } from "./actions";

function* doGetPost({ postId }) {
  try {
    const response = yield call(getPostApi, postId);
    console.log({ response });
    yield put(getAllPostSuccessAction(response));
  } catch (error) {
    yield console.log({ error });
    yield put(getAllPostFailureAction(error));
  }
}

export default function* detailPostSaga() {
  yield takeLatest(GET_POST_INIT, doGetPost);
}
