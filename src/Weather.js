import React from "react";
import "./Weather.css";

function Weather() {
  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <form className="weather-form">
        <input
          type="text"
          className="search-input"
          placeholder="Enter a city"
        />
        <button className="search-button">Search</button>
      </form>
      <main className="weather-container">
        <div className="weather-details">
          <h2>London</h2>
          <div className="date-time">
            <span>Wednesday 2:25</span> <br />
            <span>February 8,2024</span>
          </div>
          <div className="weather-conditions">
            <p>
              Light Rain
              <br />
              Humidity: 92%
              <br />
              Wind: 3mph
            </p>
          </div>
        </div>
        <div className="temperature-details">
          <p>
            <span className="weather-icon">🌧️</span>
            <span className="temperature">7℃</span>
          </p>
        </div>
      </main>
      <section className="weather-forecast">
        <div>
          <p className="day">Thursday</p>
          <p className="icon">🌧️</p>
          <p className="forecast">12℃ | 4℃</p>
        </div>
        <div>
          <p className="day">Friday</p>
          <p className="icon">🌦️</p>
          <p className="forecast">12℃ | 8℃</p>
        </div>
        <div>
          <p className="day">Saturday</p>
          <p className="icon">🌧️</p>
          <p className="forecast">12℃ | 5℃</p>
        </div>
        <div>
          <p className="day">Sunday</p>
          <p className="icon">🌤️</p>
          <p className="forecast">10℃ | 3℃</p>
        </div>
        <div>
          <p className="day">Monday</p>
          <p className="icon">🌦️</p>
          <p className="forecast">8℃ | 2℃</p>
        </div>
      </section>
      <footer>
        The project is built by
        <a href="https://github.com/WajihaAbrar">Wajiha Abrar</a>, code is
        open-sourced on
        <a href="https://github.com/WajihaAbrar/react-homework">GitHub</a> and
        hosted on <a href="https://github.com/WajihaAbrar">Netlify</a>
      </footer>
    </div>
  );
}

export default Weather;
