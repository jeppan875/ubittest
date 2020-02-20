import { takeLatest } from "redux-saga/effects";
import { put, call } from "redux-saga/effects";
import request from "utils/request";
import { FETCH_ARTICLES } from "./constants";
import { setArticles, setFetchingArticles } from "./actions";
function* fetchArticles() {
  const url = "api/articles";
  yield put(
    setFetchingArticles({
      data: true
    })
  );
  const response = yield call(request, {
    url
  });
  yield put(
    setArticles({
      data: response
    })
  );
  yield put(
    setFetchingArticles({
      data: false
    })
  );
}

export default function* rootSaga() {
  yield takeLatest(FETCH_ARTICLES, fetchArticles);
}
