import { useEffect } from "react";

import { store } from "../containers/AppContainer";

const useInjectSaga = (key, saga) => {
  useEffect(() => {
    store.injectSaga(key, saga);

    return () => {
      store.ejectSaga(key);
    };
  }, [key, saga]);
};

export default useInjectSaga;
