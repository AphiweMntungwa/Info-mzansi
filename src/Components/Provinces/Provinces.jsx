import React, { useEffect } from "react";
import "./provinces.css";
import ChartEthnic from "../Charts/Doughnut/ChartEthnic";
import { provinceThunk } from "../../app/redux/provinces/provinceActions";
import { useDispatch, useSelector } from "react-redux";

function Provinces() {
  const dispatch = useDispatch();
  const provinces = useSelector((state) => state.provinces.province);
  
  useEffect(() => {
    const bar = document.querySelector(".cross-div");
    const nav = document.querySelector("nav");
    const navWrapper = document.querySelector(".nav-wrapper");
    bar.classList.remove("bar");
    nav.classList.remove("laynav");
    navWrapper.classList.remove("wrapperOn");
    dispatch(provinceThunk(localStorage.getItem("provinceName")));
  }, []);

  const config = {
    labels: ["black", "Coloured", "Asian", "White"],
    datasets: {
      label: "Ethnicity By Province(%)",
      data: [8912921, 141376, 756991, 428842],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(100, 50, 27)",
      ],
      hoverOffset: 4,
    },
    chartText: "Population By Ethnicity",
    paragraph: provinces && provinces[0].description,
  };

  return (
    <div>
      <ChartEthnic config={config} />
    </div>
  );
}

export default Provinces;
