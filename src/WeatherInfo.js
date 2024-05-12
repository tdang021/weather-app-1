import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import TempConversion from "./TempConversion";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h5>
        <FormattedDate date={props.data.date} />
      </h5>
      <h6 class="text-capitalize">{props.data.description}</h6>

      <div class="row">
        <div class="col-7">
          <div>
            <span className="tempIcon">
              <WeatherIcon
                code={props.data.icon}
                text={props.data.description}
              />
            </span>
            <span className="current-temp">
              <TempConversion celcius={Math.round(props.data.temp)} />
            </span>
          </div>
        </div>

        <div class="col-5">
          <div className="weatherData">
            <h6>Humidity: {props.data.humidity}%</h6>
            <h6>Wind: {props.data.wind} m/s</h6>
          </div>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col">
          <WeatherForecast location={props.data.coordinates} />
        </div>
      </div>
    </div>
  );
}
