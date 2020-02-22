import { useEffect } from "react";

import { store } from "../containers/AppContainer";

const useInjectSaga = (key, saga, ...args) => {
  useEffect(() => {
    store.injectSaga(key, saga, ...args);

    return () => {
      store.ejectSaga(key);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, saga]);
};

export default useInjectSaga;
