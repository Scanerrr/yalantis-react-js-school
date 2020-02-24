import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

export default function configureStore({ history, rootSaga }) {
  const sagaMiddleware = createSagaMiddleware({ context: { history } });

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  Object.assign(store, createSagaInjector(sagaMiddleware.run, rootSaga));
  return store;
}

function createSagaInjector(runSaga, rootSaga) {
  const injectedSagas = new Map();
  const isInjected = key => injectedSagas.has(key);
  const injectSaga = (key, saga, ...args) => {
    if (isInjected(key)) {
      return;
    }
    const task = runSaga(saga, ...args);
    injectedSagas.set(key, task);
  };
  const ejectSaga = key => {
    const task = injectedSagas.get(key);
    if (task.isRunning()) {
      task.cancel();
    }
    injectedSagas.delete(key);
  };
  injectSaga("root", rootSaga);
  return { injectSaga, ejectSaga, runSaga };
}
