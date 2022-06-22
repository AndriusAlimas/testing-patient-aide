import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import ScrollToTop from "./app/utils/ScrollToTop";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { sessionService } from "redux-react-session";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import "./assets//fonts//SanFrancisco/SF-Pro-Display-Regular.otf";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// sessionService.initSessionService(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

reportWebVitals();
