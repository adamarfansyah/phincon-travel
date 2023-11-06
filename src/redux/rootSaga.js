import { all } from "redux-saga/effects";
import homeSaga from "../pages/Home/saga";
import detailPostSaga from "../pages/DetailPost/saga";

export default function* rootSaga() {
  yield all([homeSaga(), detailPostSaga()]);
}
