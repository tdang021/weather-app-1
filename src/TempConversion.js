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
      <span>
        <span className="tempConversion">
          {Math.round(props.celcius)} {""}
        </span>
        <span className="tempUnit">
          C° |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <span>
        <span className="tempConversion">
          {Math.round(fahrenheit)} {""}
        </span>
        <span className="tempUnit">
          <a href="/" onClick={showCelcius}>
            C°
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
