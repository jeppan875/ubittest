import { takeLatest } from "redux-saga/effects";
import { FETCH_ARTICLES } from "./constants";
import { setArticles, setFetchingArticles, setArticleError } from "./actions";
import { articleSelector } from "./selectors";
import { fetchGeneric } from "containers/Main/sagas";

function* fetchArticles() {
  const url = "api/articles";
  yield fetchGeneric(
    url,
    setArticles,
    setFetchingArticles,
    setArticleError,
    articleSelector
  );
}

export default function* rootSaga() {
  yield takeLatest(FETCH_ARTICLES, fetchArticles);
}
