import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./chart.css";
import OtherDetails from "./OtherDetails/OtherDetails";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function ChartEthnic({ config}) {
  useEffect(()=>{
    const bar = document.querySelector(".cross-div");
    const nav = document.querySelector("nav");
    const navWrapper = document.querySelector(".nav-wrapper");
      bar.classList.remove("bar");
      nav.classList.remove("laynav");
      navWrapper.classList.remove("wrapperOn");
  },[])

  const { labels, datasets, chartText, paragraph } = config;
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  const chart = () => {
    setChartData({
      labels,
      datasets: [
        datasets,
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "left",
        },
        title: {
          display: true,
          text: chartText,
          position: "bottom",
        },
      },
    });
  };

  useEffect(() => {
    chart();
  }, []);
  const toggleState = useSelector((state) => state.topbar.toggler);

  return (
    <div className="chartDiv">
      {toggleState ? (
        <Doughnut options={chartOptions} data={chartData} />
      ) : null}
      {toggleState ? <OtherDetails paragraph={paragraph} /> : null}
    </div>
  );
}

export default ChartEthnic;
