import { combineReducers } from "redux";
import homeReducer from "../pages/Home/reducer";
import detailPostReducer from "../pages/DetailPost/reducer";
import bookmarksReducer from "../pages/Bookmark/reducer";
import newJourneyReducer from "../pages/NewJourney/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  detailPostReducer: detailPostReducer,
  bookmarksReducer: bookmarksReducer,
  newJourneyReducer: newJourneyReducer,
});

export default rootReducer;
