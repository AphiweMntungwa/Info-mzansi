import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Topbar from "./Components/Navbars/Topbar/Topbar";
import { store } from "./app/store";
import { Provider, useSelector } from "react-redux";
import Sidebar from "./Components/Navbars/Sidebar/Sidebar";

function App({ children }) {
  const darkMode = useSelector(state=> state.mode.darkMode)
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3001/darkMode`)
  //     .then((res) => {
  //       console.log(res);
  //       serverSessionState = res.data.darkMode;
  //     })
  //     .catch((e) => console.log(e));
  // }, []);
  const test = darkMode ? {backgroundColor:'#000015'}: {backgroundColor:'white'}

  return (
    <Provider store={store}>
      <div className="App" style={test}>
        <Topbar>
          <Sidebar />
        </Topbar>
        {children}
      </div>
    </Provider>
  );
}

export default App;
