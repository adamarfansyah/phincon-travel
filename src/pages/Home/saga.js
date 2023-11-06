import { call, put, takeLatest } from "redux-saga/effects";
import { GET_POSTS_INIT } from "./constants";
import { getAllPostApi } from "./api";
import { getAllPostsFailureAction, getAllPostsSuccessAction } from "./actions";
// import { getAllPost, createPost } from "../../domain/api";
// import { setAllPost, setNewPost } from "./actions";

function* doGetAllPost() {
  try {
    const response = yield call(getAllPostApi);
    console.log({ response });
    yield put(getAllPostsSuccessAction(response));
  } catch (error) {
    yield console.log({ error });
    yield put(getAllPostsFailureAction(error));
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_POSTS_INIT, doGetAllPost);
}

// export function* doGetAllPost() {
//   try {
//     const response = yield call(getAllPost);
//     yield put(setAllPost(response));
//   } catch (error) {
//     console.log(error, "<<< ERROR");
//   }
// }

// export function* doCreatePost({ post }) {
//   try {
//     const response = yield call(createPost, post);
//     yield put(setNewPost(response));
//     const posts = yield call(getAllPost);
//     yield put(setAllPost(posts));
//   } catch (error) {
//     console.log(error, "<<< ERROR");
//   }
// }
