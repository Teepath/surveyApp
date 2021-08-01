import React from "react";
import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";
import { createStore, compose } from "redux";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider } from "react-redux";
import reducers from "./reducers";
import middleware from "./middlewares";
import firebase from "firebase/app";
import { loginAction } from "./actions/login";
import { handleSharedData } from './actions/shared';
import "./index.css";
import App from "./App";

// const hist = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(middleware));

const rrfConfig = {
  useFirestoreForProfile: true,
  userProfile: "users",
  attachAuthIsReady: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  enableLogging: true,
  logErrors: true,
  createFirestoreInstance,
};

const token = JSON.parse(localStorage.getItem("userId"));
try {
  if (token) {
    store.dispatch(loginAction(token));
    store.dispatch(handleSharedData(token))
  } else {
    console.log("nothing");
  }
} catch (error) {
  console.log(error);
}


ReactDOM.render(
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

