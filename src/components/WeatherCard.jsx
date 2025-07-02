import React, { useState } from 'react';

export default function WeatherCard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  const apiKey = "9ceac8b39fe4a7f21f833965dafbecd3";

const fetchWeather = async () => {
  if (!city) return;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  if (!response.ok) {
    setError(true);
    setWeather(null);
    return;
  }
  const data = await response.json();
  setWeather({
    name: data.name,
    temp: Math.round(data.main.temp),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    icon: data.weather[0].icon,
  });
  setError(false);
};
  return (
    <div className="card">
      <div className="search">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}> 
            <img src="/images/search.png" alt="Search" />   
     </button>
      </div>

      {error && <div className="error"><p>Invalid City Name</p></div>}

      {weather && (
        <div className="weather">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="weather"
            className="weather_icon"
          />
          <h1 className="temp">{weather.temp}°C</h1>
          <h2 className="city">{weather.name}</h2>
          <div className="details">
            <div className="col">
              <img src="/images/humidity.png" alt="Humidity" />
              <div>
                <p className="humidity">{weather.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="/images/drizzle.png" alt="Wind" />
              <div>
                <p className="wind">{weather.wind} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
