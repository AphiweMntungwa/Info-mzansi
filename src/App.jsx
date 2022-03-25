import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Topbar from "./Components/Navbars/Topbar/Topbar";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Sidebar from "./Components/Navbars/Sidebar/Sidebar";
import ChartEthnic from "./Components/Charts/Doughnut/ChartEthnic";
import Triangle from "./Components/TriangleDiv/Triangle";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Topbar>
          <Sidebar />
        </Topbar>
        <Triangle />
        <ChartEthnic />
      </div>
     
    </Provider>
  );
}

export default App;
