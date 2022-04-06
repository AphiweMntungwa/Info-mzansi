import React, { useEffect } from "react";
import "./App.css";
import Topbar from "./Components/Navbars/Topbar/Topbar";
import { store } from "./app/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Sidebar from "./Components/Navbars/Sidebar/Sidebar";
import { toggleDarkMode } from "./app/redux/darkmode/modeActions";

function App({ children }) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.mode.darkMode);

  const locSt = (get, set) => {
    if (set != undefined) {
      return localStorage.setItem(get, set);
    } else {
      return localStorage.getItem(get);
    }
  };
  
  useEffect(() => {
    const darkState = locSt('darkMode');
    if (darkState === null) {
      locSt("darkMode", 0);
    } else if (darkState == 1) {
      console.log('true true')
      dispatch(toggleDarkMode(1));
    } else if (darkState == 0) {
      dispatch(toggleDarkMode(0));
    }
  }, [darkMode]);
  
  const themeStyle = darkMode == true
    ? { backgroundColor: "rgb(15,14,15)", color:'white' }
    : { backgroundColor: "white" };

  return (
    <Provider store={store}>
      <div className="App" style={themeStyle}>
        <Topbar>
          <Sidebar />
        </Topbar>
        {children}
      </div>
    </Provider>
  );
}

export default App;
