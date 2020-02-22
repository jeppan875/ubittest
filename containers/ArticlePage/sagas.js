import { takeLatest } from "redux-saga/effects";
import { FETCH_ARTICLE } from "./constants";
import { setArticle, setFetchingArticle, setArticleError } from "./actions";
import { fetchGeneric } from "containers/Main/sagas";
import { articlesBySlug } from "./selectors";
function* fetchArticle({ slug }) {
  const url = `api/articles?slug=${slug}`;
  yield fetchGeneric(
    url,
    setArticle,
    setFetchingArticle,
    setArticleError,
    articlesBySlug,
    slug
  );
}

export default function* rootSaga() {
  yield takeLatest(FETCH_ARTICLE, fetchArticle);
}
