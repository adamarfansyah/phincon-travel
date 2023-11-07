import { combineReducers } from "redux";
import homeReducer from "../pages/Home/reducer";
import detailPostReducer from "../pages/DetailPost/reducer";
import bookmarksReducer from "../pages/Bookmark/reducer";
import newJourneyReducer from "../pages/NewJourney/reducer";
import userLoginReducer from "../pages/Login/reducer";
import profilesReducer from "../pages/Profile/reducer";
import registerReducer from "../pages/Register/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  detailPostReducer: detailPostReducer,
  bookmarksReducer: bookmarksReducer,
  newJourneyReducer: newJourneyReducer,
  userLoginReducer: userLoginReducer,
  profilesReducer: profilesReducer,
  registerReducer: registerReducer,
});

export default rootReducer;
