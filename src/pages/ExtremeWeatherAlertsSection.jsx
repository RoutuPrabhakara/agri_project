import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ExtremeWeatherAlertsSection() {
  const alerts = [
    {
      title: "Thunderstorm Warnings",
      content: "Stay safe with instant notifications about approaching thunderstorms.",
      image: "https://img.freepik.com/free-photo/beautiful-shot-lightning-strike-zagreb-croatia_181624-13398.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Heatwave Alerts",
      content: "Get notified about upcoming heatwaves to protect yourself and your crops.",
      image: "https://img.freepik.com/premium-photo/low-section-person-checking-weather-mobile-phone-outdoors_1048944-4874379.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Flood Alerts",
      content: "Receive timely alerts about potential flooding in your area.",
      image: "https://img.freepik.com/free-photo/waal-river-bed-winter-overcast-day_181624-8223.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Snowstorm Warnings",
      content: "Prepare for heavy snowstorms with accurate predictions and alerts.",
      image: "https://img.freepik.com/premium-photo/close-up-arrow-sign-snow-covered-road_1048944-26773162.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Tornado Notifications",
      content: "Get immediate notifications about tornado risks in your region.",
      image: "https://img.freepik.com/free-photo/destructive-tornado-passing-through-city-causing-havoc_157027-4125.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "High Wind Alerts",
      content: "Know when to secure your property against strong winds with real-time updates.",
      image: "https://img.freepik.com/free-photo/vertical-shot-antenna-stormy-weather_181624-4276.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Frost Advisories",
      content: "Protect your crops and livestock during sudden frosts with early alerts.",
      image: "https://img.freepik.com/premium-photo/snowy-road-sign-intersection-with-circular-traffic_357949-34.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Severe Rainfall Warnings",
      content: "Avoid disruptions caused by heavy rainfall with timely notifications.",
      image: "https://img.freepik.com/premium-photo/yellow-label-middle-field-clouds_10279-366.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Dust Storm Alerts",
      content: "Stay safe during dust storms with localized alerts and safety tips.",
      image: "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853314.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "UV Index Notifications",
      content: "Be aware of high UV index levels to avoid prolonged exposure to harmful sun rays.",
      image: "https://img.freepik.com/premium-photo/weather-forecast-smartphone-weather-forecast-display-app-sunday-temperature-sun-climate-icons-appear-virtual-screen-mobile-smart-phone-stylish-woman-hands-standing-beach_36367-8238.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Extreme Weather Alerts</h2>
      <p className="text-center mb-4">
        Stay informed and prepared with real-time alerts for extreme weather conditions in your area.
      </p>
      <div className="row">
        {alerts.map((alert, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={alert.image}
                alt={alert.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{alert.title}</h5>
                <p className="card-text">{alert.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExtremeWeatherAlertsSection;
