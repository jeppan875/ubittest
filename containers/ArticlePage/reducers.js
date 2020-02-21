import {
  SET_ARTICLE,
  SET_FETCHING_ARTICLE,
  SET_ARTICLE_ERROR
} from "./constants";

const initialState = {
  articlesBySlug: {}
};

export default (state = initialState, action) => {
  const { type, data, slug } = action;
  switch (type) {
    case SET_ARTICLE:
      return {
        ...state,
        articlesBySlug: {
          ...state.articlesBySlug,
          [slug]: {
            ...state.articlesBySlug[slug],
            data
          }
        }
      };

    case SET_FETCHING_ARTICLE:
      return {
        ...state,
        articlesBySlug: {
          ...state.articlesBySlug,
          [slug]: {
            ...state.articlesBySlug[slug],
            fetching: data
          }
        }
      };

    case SET_ARTICLE_ERROR:
      return {
        ...state,
        articlesBySlug: {
          ...state.articlesBySlug,
          [slug]: {
            ...state.articlesBySlug[slug],
            error: data
          }
        }
      };

    default:
      return state;
  }
};
