import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RealTimeWeatherUpdates() {
  const updates = [
    {
      title: "Accurate Weather Forecast",
      content: "Get precise daily and weekly weather updates for better planning and decision-making.",
      image: "https://img.freepik.com/premium-photo/rainy-day-fall-autumn-winter-season-concept_34048-1394.jpg?w=826",
    },
    {
      title: "Live Temperature Monitoring",
      content: "Track real-time temperature updates for your current or selected location.",
      image: "https://img.freepik.com/premium-photo/manager-restaurant-hotel-checks-body-temperature-staff-with-thermal-imaging-device_109285-8040.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Wind Speed and Direction",
      content: "Stay informed about wind speeds and directions to manage outdoor activities.",
      image: "https://img.freepik.com/premium-photo/low-angle-view-sign-against-sky_1048944-993258.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Humidity Levels",
      content: "Understand humidity levels to predict comfort and weather impact on crops or travel.",
      image: "https://img.freepik.com/premium-photo/thermometer-attached-window-with-rain-plant_93675-188098.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Precipitation Predictions",
      content: "Know when it will rain or snow with reliable precipitation data.",
      image: "https://img.freepik.com/premium-photo/weather-forecast-interface-digital-screen-display-showing-hot-weather-julytemperature-is-displayed-usanorth-america-area-fahrenheitselective-focustelsiailithuania04052023_334782-7590.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "UV Index Monitoring",
      content: "Stay safe under the sun by monitoring real-time UV index levels.",
      image: "https://img.freepik.com/free-photo/medium-shot-woman-working-computer_23-2149307791.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Sunrise and Sunset Timings",
      content: "Plan your day with accurate sunrise and sunset timings.",
      image: "https://img.freepik.com/free-photo/paper-made-summer-beach-assortment_23-2148934642.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Severe Weather Alerts",
      content: "Get instant notifications for severe weather conditions like storms and heatwaves.",
      image: "https://img.freepik.com/free-photo/mesmerizing-view-fresh-green-fields-cloudy-sky_181624-49447.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Real-Time Air Quality Updates",
      content: "Stay updated on air quality conditions to protect your health and the environment.",
      image: "https://img.freepik.com/premium-photo/man-is-adjusting-temperature-using-tablet-with-smart-home-app_950466-681.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Multi-Location Weather",
      content: "Switch between locations to compare weather updates in different regions.",
      image: "https://img.freepik.com/free-photo/contrasting-outdoor-texture-design_23-2149756524.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Real-Time Weather Updates</h2>
      <div className="row">
        {updates.map((update, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={update.image}
                alt={update.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{update.title}</h5>
                <p className="card-text">{update.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RealTimeWeatherUpdates;
