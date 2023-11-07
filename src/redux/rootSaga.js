import { all } from "redux-saga/effects";
import homeSaga from "../pages/Home/saga";
import detailPostSaga from "../pages/DetailPost/saga";
import bookmarksSaga from "../pages/Bookmark/saga";
import newJourneySaga from "../pages/NewJourney/saga";
import userLoginSaga from "../pages/Login/saga";
import profilesSaga from "../pages/Profile/saga";
import registerSaga from "../pages/Register/saga";

export default function* rootSaga() {
  yield all([
    homeSaga(),
    detailPostSaga(),
    bookmarksSaga(),
    newJourneySaga(),
    userLoginSaga(),
    profilesSaga(),
    registerSaga(),
  ]);
}
