import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Country from "./Country";
import "./triangle.css";

function Triangle({ provOrContr }) {
  const toggleState = useSelector((state) => state.topbar.toggler);
  const darkMode = useSelector((state) => state.mode.darkMode);
  const province = useSelector((state) => state.provinces.province);

  const triangleDark = darkMode ? "triangle_dark" : "";
  useEffect(() => {}, []);

  const config = provOrContr && province
    ? { name: province[0].name, population: province[0].populationInProv }
    : {};

  return (
    <>
      {toggleState && (
        <>
          <div className={`triangle-carrier ${triangleDark}`}></div>
          <Country config={config} />
        </>
      )}
    </>
  );
}

export default Triangle;
