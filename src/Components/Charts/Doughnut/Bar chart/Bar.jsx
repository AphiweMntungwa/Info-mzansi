import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../chart.css";
import OtherDetails from "../OtherDetails/OtherDetails";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ config}) {
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
            display:false,
          position: "top",
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
    <div className="chartDiv BarChart">
      {toggleState ? (
        <Bar options={chartOptions} data={chartData} />
      ) : null}
      {toggleState ? <OtherDetails paragraph={paragraph} /> : null}
    </div>
  );
}

export default BarChart;
