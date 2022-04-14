import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleBurger } from "../../app/redux/topbar/topbarActions";

function Converter() {
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleBurger());
    const bar = document.querySelector(".cross-div");
    const nav = document.querySelector("nav");
    const navWrapper = document.querySelector(".nav-wrapper");
    bar.classList.remove("bar");
    nav.classList.remove("laynav");
    navWrapper.classList.remove("wrapperOn");

    axios("http://localhost:3001")
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }, []);
  return <div>Converter
      <select name="currencies" id="">
          <option value="CUR"></option>
      </select>
  </div>;
}

export default Converter;
