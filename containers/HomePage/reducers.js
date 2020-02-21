import {
  SET_ARTICLES,
  SET_FETCHING_ARTICLES,
  SET_ARTICLES_ERROR
} from "./constants";

const initialState = {
  articles: {
    fetching: false,
    data: {}
  }
};

export default (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: {
          ...state.articles,
          data
        }
      };

    case SET_FETCHING_ARTICLES:
      return {
        ...state,
        articles: {
          ...state.articles,
          fetching: data
        }
      };

    case SET_ARTICLES_ERROR:
      return {
        ...state,
        articles: {
          ...state.articles,
          error: data
        }
      };

    default:
      return state;
  }
};
