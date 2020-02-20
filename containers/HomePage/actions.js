import { SET_FETCHING_ARTICLES, SET_ARTICLES } from "./constants";

export const setArticles = ({ data }) => {
  return {
    type: SET_ARTICLES,
    data
  };
};

export const setFetchingArticles = ({ data }) => {
  return {
    type: SET_FETCHING_ARTICLES,
    data
  };
};
