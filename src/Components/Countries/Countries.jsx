import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ChartEthnic from "../Charts/Doughnut/ChartEthnic";
import AccordBstrap from "../Accordion/AccordBstrap";
import LineChart from "../Charts/Line/Line";
import BarChart from "../Charts/Bar chart/Bar";

function Countries() {
    const country = useSelector(state => state.country.country)
    const config = country.description ? {
        labels: ["KZN", "EC", "WC", "Limpompo", "MP", "Gauteng", "FS", "NW", "NC"],
        datasets: {
          label: "Population By Province(%)",
          data: [7.7, 13.8, 10.6, 10.3, 6.3, 1.4, 10.6, 8.7, 30.5],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(100, 50, 27)",
            "rgb(7, 50, 27)",
            "rgb(10, 200, 70)",
            "rgb(240, 100, 27)",
            "rgb(150, 5, 2)",
            "rgb(200, 50, 2)",
          ],
          hoverOffset: 4,
        },
        chartText: "Population by Province(%)",
        paragraph: `${country.description}`,
      } : {}

      const religionConfig = country.religions ? {
            labels : country.religions.list,
            data: country.religions.listData,
            chartText:'Religion by Population.(%)'        
      } : {}

      const lineConfig = country.economy ? {
        labels : country.economy.gdp.years,
        data : country.economy.gdp.growth,
        chartText: 'GDP'
      } : {}

     


  return (
    <div>
      <ChartEthnic code='cntr' config={config} />
      <AccordBstrap config={{title:'Economic Growth.', key:1} }>
        <LineChart config={lineConfig} />
      </AccordBstrap>
      <AccordBstrap config={{title:'Religious Breakdown.', key:2}} >
        <BarChart config={religionConfig} />
      </AccordBstrap>
    </div>
  );
}

export default Countries;
