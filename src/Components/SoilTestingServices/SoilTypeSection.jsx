import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import from './assets/media/img1'
import Aos from 'aos'
import 'aos/dist/aos.css'
function SoilTypeSection() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })
  const soilTypes = [
    {
      title: "Alluvial Soil",
      content:
        "Fertile soil rich in minerals, formed by river deposits. Suitable for crops like wheat, rice, sugarcane, and pulses.",
      growingAreas: "Indo-Gangetic Plains (Punjab, Haryana, UP, Bihar, WB), Coastal Regions",
      image:
        "https://img.freepik.com/free-photo/view-undiscovered-planet-universe_23-2149240592.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Black Soil",
      content:
        "Also known as Regur soil, it's clay-rich and excellent for moisture retention. Ideal for cotton, wheat, chickpeas, and oilseeds.",
      growingAreas: "Maharashtra, MP, Gujarat, Karnataka, Tamil Nadu",
      image:
        "https://img.freepik.com/free-photo/beautiful-black-earth-fields-ukraine-agricultural-rural-landscape_169016-3837.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Red Soil",
      content:
        "Iron-rich soil with sandy and clayey texture, suitable for millets, groundnuts, rice, and pulses.",
      growingAreas: "Tamil Nadu, Karnataka, Andhra Pradesh, Odisha, Jharkhand",
      image:
        "https://img.freepik.com/free-photo/brown-sand-texture_181624-39.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Laterite Soil",
      content:
        "Rich in iron and aluminum, found in high rainfall areas. Best for tea, coffee, cashew nuts, and rubber.",
      growingAreas: "Kerala, Karnataka, Tamil Nadu, Odisha, Assam",
      image:
        "https://img.freepik.com/free-photo/macro-closeup-wall-old-detail_1122-1662.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Desert Soil",
      content:
        "Sandy soil with low organic content. Suitable for millets, barley, dates, and cactus.",
      growingAreas: "Rajasthan, Gujarat, Haryana, Punjab",
      image:
        "https://img.freepik.com/free-photo/beautiful-warm-desert-landscape_23-2149197945.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Mountain Soil",
      content:
        "Rich in organic matter, found in hilly regions. Best for tea, coffee, spices, and fruits like apples and pears.",
      growingAreas: "Himachal Pradesh, Uttarakhand, Jammu & Kashmir, Sikkim",
      image:
        "https://img.freepik.com/free-photo/rocky-desert-with-clear-blue-sky_23-2148249149.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Saline Soil",
      content:
        "Highly saline, found in coastal regions. Tolerant crops like barley, rice, and cotton can be grown.",
      growingAreas: "Rann of Kutch (Gujarat), Sundarbans (West Bengal), Odisha",
      image:
        "https://img.freepik.com/free-photo/ice-details-undiscovered-planet-universe_23-2149240609.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Peaty and Marshy Soil",
      content:
        "Soil rich in organic matter, found in swampy areas. Suitable for rice, jute, tea, and coconut.",
      growingAreas: "Kerala, West Bengal, Odisha, Assam",
      image:
        "https://img.freepik.com/free-photo/overhead-shot-grasses-sandy-surface-with-clear-blue-sky_181624-10674.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
   
      
  ];

  return (
    
    <div className="container">
      <h2 className="text-center mb-4">Soil Types and Suitable Crops</h2>
      <p className="text-center mb-4">
        Learn about different soil types in India, their characteristics, and crops they support.
      </p>
      <div className="row">
        {soilTypes.map((soil, index) => (
          <div key={index} className="col-md-4 mb-4" data-aos='flip-up'>
            <div className="card  h-100">
              <img
                src={soil.image}
                alt={soil.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              {/* <img src={image} alt="" /> */}
              <div className="card-body">
                <h5 className="card-title">{soil.title}</h5>
                <p className="card-text">{soil.content}</p>
                <p>
                  <strong>Growing Areas:</strong> {soil.growingAreas}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoilTypeSection;
