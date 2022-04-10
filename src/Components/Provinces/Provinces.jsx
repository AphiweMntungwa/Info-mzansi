import React, { useEffect } from "react";
import "./provinces.css";
import ChartEthnic from "../Charts/Doughnut/ChartEthnic";
import BarChart from "../Charts/Bar chart/Bar";
import { provinceThunk } from "../../app/redux/provinces/provinceActions";
import { useDispatch, useSelector } from "react-redux";
import AccordBstrap from "../Accordion/AccordBstrap";

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

  const config = provinces.length && {
    labels: provinces[0].raceLabels,
    datasets: {
      label: "Ethnicity By Province(%)",
      data: provinces[0].populationByRace,
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(100, 50, 27)",
      ],
      hoverOffset: 4,
    },
    chartText: "Population By Ethnicity (%)",
    paragraph: provinces[0].description,
  };

  const barConfig = provinces.length && {
    labels : ['Afrikaans', 'English', 'IsiNdebele', 'IsiXhosa', 'IsiZulu', 'Sepedi', 'Sesotho', 'Setswana',
      'SiSwati',
      'Tshivenda',
      'Xitsonga',
  ],
    data: provinces[0].populationByLanguage
    ,chartText:'Population By Language(%)'
  }

  const accordConfig = ['Languages By Province(%)', 'Financial Information']

  return (
    <div>
      <ChartEthnic config={config} />
      <AccordBstrap config={accordConfig} >
        <BarChart config={barConfig} />
      </AccordBstrap>
    </div>
  );
}

export default Provinces;
