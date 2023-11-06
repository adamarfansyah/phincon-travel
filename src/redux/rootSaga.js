import { all } from "redux-saga/effects";
import homeSaga from "../pages/Home/saga";
import detailPostSaga from "../pages/DetailPost/saga";
import bookmarksSaga from "../pages/Bookmark/saga";
import newJourneySaga from "../pages/NewJourney/saga";

export default function* rootSaga() {
  yield all([homeSaga(), detailPostSaga(), bookmarksSaga(), newJourneySaga()]);
}
