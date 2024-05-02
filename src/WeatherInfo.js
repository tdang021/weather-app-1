import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <h5>
        <FormattedDate date={props.data.date} />
      </h5>

      <div class="row">
        <div class="col-6">
          <h6 class="text-capitalize">{props.data.description}</h6>
          <h5>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="clear sky"
            />{" "}
            {Math.round(props.data.temp)}°C
          </h5>
        </div>
        <div class="col-6">
          <h6>Humidity: {props.data.humidity}%</h6>
          <h6>Wind: {props.data.wind} m/s</h6>
        </div>
      </div>
    </div>
  );
}
