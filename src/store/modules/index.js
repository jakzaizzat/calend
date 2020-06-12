import { combineReducers } from "redux";
import eventReducer from "./event";

const rootReducer = combineReducers({
  eventState: eventReducer
});

export default rootReducer;
