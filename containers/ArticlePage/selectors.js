import { createSelector } from "reselect";

export const articleSelector = state => {
  return state.articles;
};

export const articlesBySlug = createSelector(
  articleSelector,
  articles => articles.articlesBySlug
);
