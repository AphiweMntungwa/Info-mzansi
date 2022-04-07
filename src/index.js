import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Triangle from "./Components/TriangleDiv/Triangle";
import ChartEthnic from "./Components/Charts/Doughnut/ChartEthnic";
import Provinces from "./Components/Provinces/Provinces";
import Countries from "./Components/Countries/Countries";


const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            <App>
              <Triangle />
              <Countries />
            </App>
          </Provider>
        }
      />
      <Route
        path="/province"
        element={
          <Provider store={store}>
            <App>
              <Triangle provOrContr={true} />
              <Provinces />
            </App>
          </Provider>
        }
      />
    </Routes>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
