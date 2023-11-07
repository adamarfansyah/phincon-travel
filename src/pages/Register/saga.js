import { call, put, takeLatest } from "redux-saga/effects";
import { POST_PROFILE_SUCCESS } from "./constants";
import { createProfileApi } from "./api";
import { postProfileAction, postProfileFailure } from "./actions";

function* doCreateProfileSaga({ profile }) {
  try {
    const response = yield call(createProfileApi, profile);
    yield put(postProfileAction(response));
  } catch (error) {
    yield put(postProfileFailure(error));
  }
}

export default function* registerSaga() {
  yield takeLatest(POST_PROFILE_SUCCESS, doCreateProfileSaga);
}
