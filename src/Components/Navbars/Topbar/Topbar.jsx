import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBurger } from "../../../app/redux/topbar/topbarActions";
import RainbowText from "react-rainbow-text";
import "./topbar.css";

function Topbar({ children }) {
  const toggleState = useSelector((state) => state.topbar.toggler);
  const dispatch = useDispatch();

  const handleNavToggle = () => {
    dispatch(toggleBurger());
    const bar = document.querySelector(".cross-div");
    const nav = document.querySelector("nav");
    const navWrapper = document.querySelector(".nav-wrapper");
    if (toggleState) {
      bar.classList.add("bar");
      nav.classList.add("laynav");
      navWrapper.classList.add("wrapperOn");
    } else {
      bar.classList.remove("bar");
      nav.classList.remove("laynav");
      navWrapper.classList.remove("wrapperOn");
    }
  }

  
  return (
    <div className="nav-wrapper">
      <nav>
        <h1>
          <RainbowText lightness={0.2} saturation={1}>
            inform-sa
          </RainbowText>
        </h1>

        <div
          className="cross-div"
          onClick={handleNavToggle}
        >
          <div className="cross-button"></div>
          <div className="cross-button"></div>
          <div className="cross-button"></div>
        </div>
        {children}
      </nav>
    </div>
  );
}

export default Topbar;
