import { call, put, takeLatest } from "redux-saga/effects";
import { GET_PROFILES_INIT } from "./constants";
import { getProfilesApi } from "./api";
import { getAllProfilesFailureAction, getAllProfilesSuccessAction } from "./actions";

function* doGetProfilesSaga() {
  try {
    const response = yield call(getProfilesApi);
    yield put(getAllProfilesSuccessAction(response));
  } catch (error) {
    yield console.log({ error });
    yield put(getAllProfilesFailureAction(error));
  }
}

export default function* profilesSaga() {
  yield takeLatest(GET_PROFILES_INIT, doGetProfilesSaga);
}
