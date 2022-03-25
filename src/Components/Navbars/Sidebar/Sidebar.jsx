import React from "react";
import { useSelector } from "react-redux";
import "./sidebar.css";

function Sidebar() {
  const toggleState = useSelector((state) => state.topbar.toggler);
  const sideToggle = toggleState ? { display: "none" } : { display: "block" };

  return (
    <div className="side-div" style={sideToggle}>
      <ul>
        <li>Municipalities</li>
        <li>Provinces</li>
        <li>Wards</li>
      </ul>
    </div>
  );
}

export default Sidebar;
