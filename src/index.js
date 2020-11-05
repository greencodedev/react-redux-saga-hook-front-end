import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux';
import configureStore from './config/configure-store'

const store = configureStore()


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();