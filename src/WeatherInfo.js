import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import TempConversion from "./TempConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h5>
        <FormattedDate date={props.data.date} />
      </h5>
      <h6 class="text-capitalize">{props.data.description}</h6>

      <div class="row">
        <div class="col-6">
          <div className="weatherTemp">
            <span>
              <WeatherIcon code={props.data.icon} />{" "}
            </span>
          </div>

          <div>
            <span>
              <TempConversion celcius={Math.round(props.data.temp)} />
            </span>
          </div>
        </div>

        <div class="col-6">
          <h6>Humidity: {props.data.humidity}%</h6>
          <h6>Wind: {props.data.wind} m/s</h6>
        </div>
      </div>
    </div>
  );
}
