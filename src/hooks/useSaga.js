import { useCallback, useEffect, useRef } from "react";

import { store } from "../containers/AppContainer";

export const useInjectSaga = (key, saga, ...args) => {
  useEffect(() => {
    store.injectSaga(key, saga, ...args);

    return () => {
      store.ejectSaga(key);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, saga]);
};

export const useRunSaga = (saga, cancelOnUnmount) => {
  const taskRef = useRef(null);
  useEffect(
    () => () => {
      if (cancelOnUnmount) {
        // eslint-disable-next-line no-unused-expressions
        taskRef.current?.cancel();
      }
    },
    [cancelOnUnmount]
  );
  return useCallback(
    (...args) => {
      if (taskRef.current?.isRunning()) {
        taskRef.current.cancel();
      }
      taskRef.current = store.runSaga(saga, ...args);
      return taskRef.current.toPromise();
    },
    [saga]
  );
};
