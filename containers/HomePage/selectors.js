import { createSelector } from "reselect";

export const homeSelector = state => {
  return state.home;
};

export const articleSelector = createSelector(
  homeSelector,
  home => home.articles.data
);

export const fetchingArticles = createSelector(
  homeSelector,
  home => home.articles.fetching
);
