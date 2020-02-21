import { takeLatest } from "redux-saga/effects";
import { put, call } from "redux-saga/effects";
import request from "utils/request";
import { FETCH_ARTICLE } from "./constants";
import { setArticle, setFetchingArticle, setArticleError } from "./actions";

function* fetchArticle({ slug }) {
  const url = `api/articles?slug=${slug}`;
  yield put(
    setFetchingArticle({
      data: true,
      slug
    })
  );
  const response = yield call(request, {
    url
  });
  if (response.err) {
    yield put(
      setArticleError({
        data: response.err,
        slug
      })
    );
  } else {
    yield put(
      setArticle({
        data: response,
        slug
      })
    );
  }

  yield put(
    setFetchingArticle({
      data: false,
      slug
    })
  );
}

export default function* rootSaga() {
  yield takeLatest(FETCH_ARTICLE, fetchArticle);
}
