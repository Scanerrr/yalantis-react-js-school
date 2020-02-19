import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import rootSaga from "../store/rootSaga";
import configureStore from "../store/configureStore";

const history = createBrowserHistory();

export const store = configureStore({ history, rootSaga });

const AppContainer = ({ children }) => (
  <Router history={history}>
    <Provider store={store}>{children}</Provider>
  </Router>
);

export default AppContainer;
