import { combineReducers } from "redux";
import reducer from "./reducer";
import errorRed from "./errorRed";

export default combineReducers({
  states: reducer,
  errors: errorRed,
});
