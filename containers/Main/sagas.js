import { put, call, select } from "redux-saga/effects";
import request from "utils/request";

export function* fetchGeneric(
  url,
  setData,
  setFetching,
  setError,
  selector,
  key
) {
  const oldData = yield select(selector);

  if (key ? oldData[key] != null : oldData != null) {
    return;
  }
  yield put(
    setFetching({
      data: true,
      key
    })
  );
  const response = yield call(request, {
    url
  });
  if (response.err) {
    yield put(
      setError({
        data: response.err,
        key
      })
    );
  } else {
    yield put(
      setData({
        data: response,
        key
      })
    );
  }

  yield put(
    setFetching({
      data: false,
      key
    })
  );
}
