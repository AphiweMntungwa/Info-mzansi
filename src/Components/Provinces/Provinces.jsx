import React, { useEffect } from "react";
import "./provinces.css";
import ChartEthnic from "../Charts/Doughnut/ChartEthnic";

function Provinces() {
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
    paragraph: `KwaZulu-Natal (/kwɑːˌzuːluː nəˈtɑːl/, also referred to as KZN and 
    known as "the garden province";[5] Zulu: iKwaZulu-Natali; Xhosa: KwaZulu-Natala; 
    Afrikaans: KwaZoeloe-Natal) is a province of South Africa that was created in 1994 
    when the Zulu bantustan of KwaZulu ("Place of the Zulu" in Zulu) and Natal Province 
    were merged.`,
  };

  return (
    <div>
      <ChartEthnic config={config} />
    </div>
  );
}

export default Provinces;
