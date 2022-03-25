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

function ChartEthnic() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  const chart = () => {
    setChartData({
      labels: ["Black", "Coloured", "White", "Asian"],
      datasets: [
        {
          label: "Ethnic Groups",
          data: [80.7, 8.8, 7.9, 2.6],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(100, 50, 27)",
          ],
          hoverOffset: 4,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: { display: true, text: "Ethnic Groups" },
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
      {toggleState ? <OtherDetails /> : null}
    </div>
  );
}

export default ChartEthnic;
