import React from "react";
import { useSelector } from "react-redux";
import Country from "./Country";
import "./triangle.css";

function Triangle({config}) {
  const toggleState = useSelector((state) => state.topbar.toggler);

  return (
    <>
      {toggleState && (
        <>
          <div className="triangle-carrier"></div>
          <Country config={config}/>
        </>
      )}
    </>
  );
}

export default Triangle;
