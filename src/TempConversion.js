import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="tempConversion">
        <span>
          {Math.round(props.celcius)} {""}
        </span>
        <span>
          C° |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="tempConversion">
        <span>
          {Math.round(fahrenheit)} {""}
        </span>
        <span>
          <a href="/" onClick={showCelcius}>
            C°
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
