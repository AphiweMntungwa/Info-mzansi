import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleBurger } from "../../app/redux/topbar/topbarActions";
import Selectors from "./Selectors";
import "./selectors.css";

function Converter() {
  const dispatch = useDispatch();
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountFrom, setAmountFrom] = useState(true);

  let toAmount, fromAmount;
  if (amountFrom) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    const bar = document.querySelector(".cross-div");
    const nav = document.querySelector("nav");
    const navWrapper = document.querySelector(".nav-wrapper");
    bar.classList.remove("bar");
    nav.classList.remove("laynav");
    navWrapper.classList.remove("wrapperOn");

    axios
      .post("http://localhost:3001/forex")
      .then(({ data }) => {
        const { base, rates } = data;
        const firstCur = Object.keys(rates)[0];
        setExchangeRate(rates[firstCur]);
        setFromCurrency(base);
        setToCurrency(firstCur);
        setCurrencyOptions([base, ...Object.keys(rates)]);
      })
      .catch((e) => console.log(e));
  }, []);
  const handleFromAmount = (e) => {
    setAmount(e.target.value);
    setAmountFrom(true);
  };
  const handleToAmount = (e) => {
    setAmount(e.target.value);
    setAmountFrom(false);
  };

  useEffect(() => {
    axios
      .post(`http://localhost:3001/forex`, { toCurrency })
      .then(({ data }) => {
        console.log(toCurrency, data);
        const { rates } = data;
        const firstCur = Object.keys(rates);
        setExchangeRate(rates[firstCur]);
      })
      .catch((e) => console.log("forexconfig", e));
  }, [toCurrency]);

  return (
    <div className="converter">
      Converter
      <Selectors
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onCurrency={(e) => alert("API free plan only supports base EUR")}
        amount={fromAmount}
        amountChange={handleFromAmount}
      />
      <span className="arrow-span"> &#x021D4;</span>
      <Selectors
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        amountChange={handleToAmount}
      />
    </div>
  );
}

export default Converter;
