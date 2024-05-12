import React from "react";

export default function DailyForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.daily.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.daily.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.daily.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="DailyForecast">
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={props.daily.condition.icon_url}
        alt={props.daily.condition.icon}
        className="img-fluid"
      />
      <div>
        {" "}
        <span className="Forecast-temp-max">{maxTemp()}</span>
        <span className="Forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
