import React from "react";
import "./Weather.css";

function Weather() {
  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <form className="weather-form">
        <input type="text" placeholder="Enter a city" />
        <button className="search-button">Search</button>
      </form>
      <main className="weather-container">
        <div className="weather-details">
          <h2>London</h2>
          <p>
            <span>Wednesday 2:25</span> <br />
            <span>February 8,2024</span>
          </p>
          <p>
            Light Rain
            <br />
            Humidity: 92%
            <br />
            Wind: 3mph
          </p>
        </div>
        <div className="temperature">
          <p>
            <span>🌧️</span> <span>7℃</span>
          </p>
        </div>
      </main>
      <section className="weather-forecast">
        <div>
          <p>Thursday</p>
          <p>🌧️</p>
          <p>12℃ | 4℃</p>
        </div>
        <div>
          <p>Friday</p>
          <p>🌦️</p>
          <p>12℃ | 8℃</p>
        </div>
        <div>
          <p>Saturday</p>
          <p>🌧️</p>
          <p>12℃ | 5℃</p>
        </div>
        <div>
          <p>Sunday</p>
          <p>🌤️</p>
          <p>10℃ | 3℃</p>
        </div>
        <div>
          <p>Monday</p>
          <p>🌦️</p>
          <p>8℃ | 2℃</p>
        </div>
      </section>
    </div>
  );
}

export default Weather;
