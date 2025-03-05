import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
function IrrigationTipsSection() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })
  const tips = [
    {
      title: "Drip Irrigation",
      content:
        "Drip irrigation is ideal for conserving water and delivering nutrients directly to the roots of plants.",
      image:
        "https://img.freepik.com/premium-photo/green-house-young-vegetables-soil_93025-71.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Sprinkler Systems",
      content:
        "Use sprinklers for even water distribution across large fields or gardens.",
      image:
        "https://img.freepik.com/premium-photo/greenhouse-sprinkler-system-with-lush-plants-eye-level_501731-22682.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Rainwater Harvesting",
      content:
        "Collect rainwater to reduce dependency on groundwater and save resources.",
      image:
        "https://img.freepik.com/free-photo/vertical-closeup-roof-drain-pipe_181624-46535.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Soil Moisture Monitoring",
      content:
        "Check soil moisture regularly to avoid overwatering or underwatering.",
      image:
        "https://img.freepik.com/free-photo/close-up-woman-examining-plant-growth-using-touchpad-while-working-plant-nursery_637285-1425.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Smart Irrigation Systems",
      content:
        "Install smart irrigation systems with timers and sensors for efficient water usage.",
      image:
        "https://img.freepik.com/free-photo/robot-spraying-fertilizer-vegetable-garden_35913-3099.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Watering Schedule",
      content:
        "Water plants early in the morning or late in the afternoon to minimize evaporation.",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-florist-watering-flowers_176420-2061.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Irrigation Tips</h2>
      <p className="text-center mb-4">
        Maximize water efficiency and boost crop yields with these practical irrigation tips.
      </p>
      <div className="row">
        {tips.map((tip, index) => (
          <div key={index} className="col-md-4 mb-4" data-aos='zoom-in-left'>
            <div className="card shadow h-100">
              <img
                src={tip.image}
                alt={tip.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{tip.title}</h5>
                <p className="card-text">{tip.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IrrigationTipsSection;
