import {
  SET_FETCHING_ARTICLES,
  SET_ARTICLES,
  SET_ARTICLES_ERROR
} from "./constants";

export const setArticles = ({ data }) => {
  return {
    type: SET_ARTICLES,
    data
  };
};

export const setArticleError = ({ data }) => {
  return {
    type: SET_ARTICLES_ERROR,
    data
  };
};

export const setFetchingArticles = ({ data }) => {
  return {
    type: SET_FETCHING_ARTICLES,
    data
  };
};
