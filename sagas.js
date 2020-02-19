import { all, fork } from "redux-saga/effects";
function* rootSaga() {
  try {
    yield all([]);
  } catch (err) {
    console.error(err);
  }
}

export default rootSaga;
