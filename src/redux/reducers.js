import { combineReducers } from "redux";
import homeReducer from "../pages/Home/reducer";
import detailPostReducer from "../pages/DetailPost/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  detailPostReducer: detailPostReducer,
});

export default rootReducer;
