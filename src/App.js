import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function App(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function getWeather(response) {
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl:
        "https://openweathermap.org/img/wn/{response.data.weather[0].icon}.@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = `32feea4cbb7bc29288ae4d4a2465feab`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="app-container" class="border p-3">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    autofocus="on"
                    class="w-100 h-100"
                    onChange={searchCity}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    class="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>

            <h1>{city}</h1>
            <h5>Friday, April 19 15:30</h5>

            <div class="row">
              <div class="col-6">
                <h6 class="text-capitalize">{weatherData.description}</h6>
                <h5>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="clear sky"
                  />{" "}
                  {Math.round(weatherData.temp)}°C
                </h5>
              </div>
              <div class="col-6">
                <h6>Humidity: {weatherData.humidity}%</h6>
                <h6>Wind: {weatherData.wind} m/s</h6>
              </div>
            </div>
          </div>
          <footer>
            This website was coded by Tiffany and is open-sourced on{" "}
            <a
              href="https://github.com/tdang021/weather-app-1.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
