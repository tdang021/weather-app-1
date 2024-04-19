import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let [city, setCity] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

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

          <h1>Paris</h1>
          <h5>Friday, April 19 15:30</h5>

          <div class="row">
            <div class="col-6">
              <h6>Clear sky</h6>
              <h5>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="clear sky"
                />{" "}
                15°C
              </h5>
            </div>
            <div class="col-6">
              <h6>Humidity: 10%</h6>
              <h6>Precipitation: 20%</h6>
              <h6>Wind: 6 km/h</h6>
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
}

export default App;
