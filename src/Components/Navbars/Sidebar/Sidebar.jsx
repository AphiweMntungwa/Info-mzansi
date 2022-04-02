import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./sidebar.css";
import "boxicons";
import DropList from "./Entities/DropList";

function Sidebar() {
  const toggleState = useSelector((state) => state.topbar.toggler);
  const sideToggle = toggleState ? { display: "none" } : { display: "block" };
  const [chevron, chevronSpin] = useState([]);

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
      {name : "KWAZULU-NATAL", link: "/kzn"},
      {name : "LIMPOMPO", link: "/lp"},
      {name : "NORTH WEST", link: "/nw"},
      {name : "NOTHERN CAPE", link: "/np"},
      {name : "GAUTENG", link: "gp"},
      {name : "EASTERN CAPE", link: "/ec"},
      {name : "WESTERN CAPE", link: "/wc"},
      {name : "FREE STATE", link: "/fs"},
      {name : "MPUMALANGA", link: "/mp"},
    ],
    municipalities: [
      "METROPOLITAN",
      "DISTRICT",
      "LOCAL"
    ],
    cities:[
      "Joburg",
      "Durban",
      "Cape Town"
    ]
  };

  return (
    <div className="side-div" style={sideToggle}>
      <ul>
        <li>
          Search All Fields <input type="text" />{" "}
          <box-icon name="search-alt-2" type="solid"></box-icon>
        </li>
        <li onClick={handleClass} id="1">
          Provinces <box-icon name="chevron-down"></box-icon>
          <span><DropList dropProps={dropProps.provinces} /></span>
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
