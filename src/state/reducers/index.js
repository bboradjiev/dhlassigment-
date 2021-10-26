import { combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
  favorites: reducer,
});

export default reducers;
