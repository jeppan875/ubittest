import {
  SET_FETCHING_ARTICLE,
  SET_ARTICLE,
  SET_ARTICLE_ERROR
} from "./constants";

export const setArticle = ({ data, slug }) => {
  return {
    type: SET_ARTICLE,
    data,
    slug
  };
};

export const setArticleError = ({ data, slug }) => {
  return {
    type: SET_ARTICLE_ERROR,
    data,
    slug
  };
};

export const setFetchingArticle = ({ data, slug }) => {
  return {
    type: SET_FETCHING_ARTICLE,
    data,
    slug
  };
};
