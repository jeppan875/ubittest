import homeReducer from "containers/HomePage/reducers";
import { combineReducers } from "redux";

export default () => {
  const rootReducer = combineReducers({ home: homeReducer });
  return rootReducer;
};
