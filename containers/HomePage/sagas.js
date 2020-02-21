import { takeLatest } from "redux-saga/effects";
import { put, call, select } from "redux-saga/effects";
import request from "utils/request";
import { FETCH_ARTICLES } from "./constants";
import { setArticles, setFetchingArticles, setArticleError } from "./actions";
import { articleSelector } from "./selectors";
function* fetchArticles() {
  const url = "api/articles";
  const oldData = yield select(articleSelector);
  console.log(oldData);
  yield put(
    setFetchingArticles({
      data: true
    })
  );
  const response = yield call(request, {
    url
  });
  if (response.err) {
    yield put(
      setArticleError({
        data: response.err
      })
    );
  } else {
    yield put(
      setArticles({
        data: response
      })
    );
  }

  yield put(
    setFetchingArticles({
      data: false
    })
  );
}

export default function* rootSaga() {
  yield takeLatest(FETCH_ARTICLES, fetchArticles);
}
