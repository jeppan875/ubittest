import homeSaga from "containers/HomePage/sagas";
import articleSaga from "containers/ArticlePage/sagas";
import { all, fork } from "redux-saga/effects";
function* rootSaga() {
  try {
    yield all([fork(homeSaga), fork(articleSaga)]);
  } catch (err) {
    console.error(err);
  }
}

export default rootSaga;
