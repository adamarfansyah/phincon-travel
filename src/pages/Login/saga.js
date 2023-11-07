import { call, put, takeLatest } from "redux-saga/effects";
import { GET_USER_LOGIN_INIT, POST_USER_LOGIN_SUCCESS } from "./constants";
import { getUserLogin, loginApi } from "./api";
import {
  getUserLoginFailureAction,
  getUserLoginSuccesAction,
  postUserLoginAction,
  postUserLoginFailureAction,
} from "./actions";

function* doGetUserLogin({ userId }) {
  try {
    const response = yield call(getUserLogin, userId);
    yield put(getUserLoginSuccesAction(response));
  } catch (error) {
    console.log({ error });
    yield put(getUserLoginFailureAction(error));
  }
}

function* doPostUserLogin({ user }) {
  try {
    const response = yield call(loginApi, user);
    yield put(postUserLoginAction(response));
  } catch (error) {
    yield put(postUserLoginFailureAction(error));
  }
}

export default function* userLoginSaga() {
  yield takeLatest(GET_USER_LOGIN_INIT, doGetUserLogin);
  yield takeLatest(POST_USER_LOGIN_SUCCESS, doPostUserLogin);
}
