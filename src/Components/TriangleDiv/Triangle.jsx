import React from "react";
import { useSelector } from "react-redux";
import "./triangle.css";

function Triangle() {
  const toggleState = useSelector((state) => state.topbar.toggler);

  return <>{toggleState && <div class="triangle-carrier">Prego</div>}</>;
}

export default Triangle;
