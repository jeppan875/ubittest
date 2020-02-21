import homeReducer from "containers/HomePage/reducers";
import articleReducer from "containers/ArticlePage/reducers";
import { combineReducers } from "redux";

export default () => {
  const rootReducer = combineReducers({
    home: homeReducer,
    articles: articleReducer
  });
  return rootReducer;
};
