import homeSaga from "containers/HomePage/sagas";
import { all, fork } from "redux-saga/effects";
function* rootSaga() {
  try {
    yield all([fork(homeSaga)]);
  } catch (err) {
    console.error(err);
  }
}

export default rootSaga;
