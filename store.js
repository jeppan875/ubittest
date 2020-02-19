import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const dev = process.env.NODE_ENV !== "production";
const isClient = typeof window !== "undefined";

const composeEnhancers =
  dev && isClient && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const makeStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return store;
};

export default makeStore;
