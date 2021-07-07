import { combineReducers } from "redux";
import { dentalReducer } from "./reducer";

export const rootReducer = combineReducers({
  data: dentalReducer,
});
