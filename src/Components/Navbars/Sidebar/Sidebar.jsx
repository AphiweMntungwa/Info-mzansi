import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./sidebar.css";
import "boxicons";
import DropList from "./Entities/DropList";
import { toggleDarkMode } from "../../../app/redux/darkmode/modeActions";

function Sidebar() {
  const toggleState = useSelector((state) => state.topbar.toggler);
  const darkMode = useSelector((state) => state.mode.darkMode);
  const dispatch = useDispatch();

  const sideToggle = toggleState ? { display: "none" } : { display: "block" };
  const [chevron, chevronSpin] = useState([]);

  const handleDarkMode = () => {
    const darkState = localStorage.getItem("darkMode");
    if (darkState == true) {
      localStorage.setItem("darkMode", 0);
      dispatch(toggleDarkMode(0))
    } else {
      localStorage.setItem("darkMode", 1);
      dispatch(toggleDarkMode(1))
    }
  };

  const handleClass = (e) => {
    if (chevron.includes(e.target.id)) {
      e.target.classList.remove("chevronSwitch");
      const spin = chevron.filter((el) => el != e.target.id);
      chevronSpin(spin);
    } else {
      e.target.classList.add("chevronSwitch");
      chevronSpin([...chevron, ...e.target.id]);
    }
  };

  const dropProps = {
    provinces: [
      { name: "KWAZULU-NATAL", link: "/province" },
      { name: "LIMPOPO", link: "/province" },
      { name: "NORTH WEST", link: "/province" },
      { name: "NORTHERN CAPE", link: "/province" },
      { name: "GAUTENG", link: "/province" },
      { name: "EASTERN CAPE", link: "/province" },
      { name: "WESTERN CAPE", link: "/province" },
      { name: "FREE STATE", link: "/province" },
      { name: "MPUMALANGA", link: "/province" },
    ],
    municipalities: ["METROPOLITAN", "DISTRICT", "LOCAL"],
    cities: ["Joburg", "Durban", "Cape Town"],
  };
  const darkOrLight = darkMode ? 'Light' : 'Dark'
  const iconDark = darkMode ? 'dark-icons' : ''

  return (
    <div className={`side-div`} style={sideToggle}>
      <ul>
        <li className={iconDark}> 
          Search All Fields <input type="text" />
          <box-icon name="search-alt-2" type="solid"></box-icon>
        </li>
        <li onClick={handleClass} id="1" className={iconDark}>
          Provinces <box-icon name="chevron-down"></box-icon>
          <span>
            <DropList dropProps={dropProps.provinces} />
          </span>
        </li>
        <li onClick={handleDarkMode} className={iconDark}>
          {darkOrLight} Mode <box-icon name='brightness'></box-icon>
        </li>
        {/* <li onClick={handleClass} id="2">
          Municipalities <box-icon name="chevron-down"></box-icon>
          <span><DropList dropProps={dropProps.municipalities} /></span>
        </li>
        <li onClick={handleClass} id="3">
          Cities <box-icon name="chevron-down"></box-icon>
          <span><DropList dropProps={dropProps.cities} /></span>
        </li>
        <li>
          About Page <box-icon name="paper-plane"></box-icon>
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar;
