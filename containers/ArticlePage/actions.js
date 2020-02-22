import {
  SET_FETCHING_ARTICLE,
  SET_ARTICLE,
  SET_ARTICLE_ERROR
} from "./constants";

export const setArticle = ({ data, key }) => {
  return {
    type: SET_ARTICLE,
    data,
    slug: key
  };
};

export const setArticleError = ({ data, key }) => {
  return {
    type: SET_ARTICLE_ERROR,
    data,
    slug: key
  };
};

export const setFetchingArticle = ({ data, key }) => {
  return {
    type: SET_FETCHING_ARTICLE,
    data,
    slug: key
  };
};
