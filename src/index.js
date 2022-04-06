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
import { homeConfig, provinceConfig } from "./props";

const config = {
  labels: ["KZN", "EC", "WC", "Limpompo", "MP", "Gauteng", "FS", "NW", "NC"],
  datasets: {
    label: "Population By Province(%)",
    data: [7.7, 13.8, 10.6, 10.3, 6.3, 1.4, 10.6, 8.7, 30.5],
    backgroundColor: [
      "rgb(255, 99, 132)",
      "rgb(54, 162, 235)",
      "rgb(255, 205, 86)",
      "rgb(100, 50, 27)",
      "rgb(7, 50, 27)",
      "rgb(10, 200, 70)",
      "rgb(240, 100, 27)",
      "rgb(150, 5, 2)",
      "rgb(200, 50, 2)",
    ],
    hoverOffset: 4,
  },
  chartText: "Population by Province(%)",
  paragraph: `South Africa, officially the Republic of South Africa (RSA), is the
  southernmost country in Africa. With over 60 million people, the country
  is the world's 23rd-most populous nation and covers an area of 1,221,037
  square kilometres (471,445 square miles).`,
};

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
              <ChartEthnic code='cntr' config={config} />
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
