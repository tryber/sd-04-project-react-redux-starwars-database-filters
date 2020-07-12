import { combineReducers } from "redux";
import swReducer from "./swReducer";

const rootReducer = combineReducers({
  swReducer,
});

export default rootReducer;
