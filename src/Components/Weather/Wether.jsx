import React, { useEffect, useState } from "react";
import './Style.css'

function Weather() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [weeklyReports, setWeeklyReports] = useState([]);
  const [dangerAlerts, setDangerAlerts] = useState("");
  const [background, setBackground] = useState({ video: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "2e901e395282f2f49917bb00247638ae";

  const fetchWeather = async (name) => {
    setLoading(true);
    setError("");
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            
            // Use the latitude and longitude to fetch weather data
            fetch(
              `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
            )
              .then(res => res.json())
              .then(data => {
                setWeather(data);
                console.log(data);
                
              });
            },
          (error) => {
            console.error('Error getting location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
      
    } catch (error) {
      console.error(error);
      setError(error.message || "Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  const updateBackgroundMedia = (condition) => {
    const lowerCaseCondition = condition.toLowerCase();
    const media = {
      clear: { video: "https://example.com/clear.mp4", image: "https://example.com/clear.jpg" },
      clouds: { video: "https://example.com/clouds.mp4", image: "https://example.com/clouds.jpg" },
      snow: { video: "https://example.com/snow.mp4", image: "https://example.com/snow.jpg" },
      default: { video: "https://example.com/default.mp4", image: "https://example.com/default.jpg" },
    };
    setBackground(media[lowerCaseCondition] || media.default);
  };

  useEffect(() => {
    if (navigator.geolocation) {
     try {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => fetchWeather(coords.latitude, coords.longitude),
        () => setError("Unable to fetch location")
      );
     } catch (error) {
      console.log(error);
      
     }
    } else {
      setError("Geolocation is not supported by this browser");
    }
  }, []);

  const handleSearch = () => {
    if (location.trim() === "") {
      setError("Please enter a valid location");
      return;
    }
    fetchWeather(null, null, location.trim());
  };

  return (
    <div
      className="weather-app"
      style={{
        backgroundImage: `url(${background.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {background.video && (
        <video
          className="background-video"
          autoPlay
          loop
          muted
          src={background.video}
          type="video/mp4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      )}

      <div className="weather-app">
      <div className="content">
        <h1 className=" mb-3 text-warning">Weather App</h1>

        <div className="search d-flex">
          <input
            type="text"
            placeholder="Enter city name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={fetchWeather} className="btn btn-warning">Search</button>
        </div>

        {error && <p className="error">{error}</p>}
        {loading && <p>Loading...</p>}
        {dangerAlerts && <p className="danger-alert">ALERT: {dangerAlerts}</p>}

        {weather && (
          <div className="weather-card">
            <h2 className="text-warning fw-bold">{weather.name}</h2>
            <p>Cloud: {weather.clouds?.all ? `${weather.clouds?.all}°C` : "N/A"}</p>
            <p>Condition: {weather.weather?.[0]?.description || "N/A"}</p>
            <p>Humidity: {weather.main?.humidity ? `${weather.main?.humidity}%` : "N/A"}</p>
            <p>Wind Speed: {weather.wind?.speed ? `${weather.wind?.speed} m/s` : "N/A"}</p>
          </div>
        )}

        {weeklyReports.length > 0 && (
          <div className="forecast">
            <h3>7-Day Forecast</h3>
            <div className="forecast-list">
              {weeklyReports.map((day, index) => (
                <div key={index} className="forecast-card">
                  <h4>{new Date(day.dt * 1000).toLocaleDateString()}</h4>
                  <p>{day.weather[0].description}</p>
                  <p>CLouds: {day.temp.day}°C</p>
                  <p>Wind: {day.wind_speed} m/s</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default Weather;
