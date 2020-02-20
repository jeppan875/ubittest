import { SET_ARTICLES, SET_FETCHING_ARTICLES } from "./constants";

const initialState = {
  articles: {
    fetching: false,
    data: {
      results: []
    }
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

    default:
      return state;
  }
};
