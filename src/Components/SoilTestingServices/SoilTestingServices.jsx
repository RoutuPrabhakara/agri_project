import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SoilTestingServices() {
  const soilServices = [
    {
      title: "pH Testing",
      content:
        "Measure the soil pH to determine its acidity or alkalinity, ensuring suitable crop selection and nutrient availability.",
      image:
        "https://img.freepik.com/premium-photo/take-water-samples-analysis-selective-focus_73944-65114.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Nitrogen Testing",
      content:
        "Identify the nitrogen levels in your soil to support optimal plant growth and maintain balanced nutrient levels.",
      image:
        "https://img.freepik.com/free-photo/close-up-doctor-taking-medical-samples_23-2148440031.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Phosphorus Testing",
      content:
        "Check the phosphorus content to enhance root development and improve the yield of your crops.",
      image:
        "https://img.freepik.com/premium-photo/preparation-process-making-soft-shadows-tattoo-close-up_392895-450533.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Potassium Testing",
      content:
        "Analyze potassium levels to boost plant resistance to diseases and improve crop quality.",
      image:
        "https://img.freepik.com/free-photo/delicious-apple-chemicals-tubes_23-2148536466.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Micronutrient Analysis",
      content:
        "Detect deficiencies in micronutrients such as zinc, iron, and manganese to ensure soil health.",
      image:
        "https://img.freepik.com/free-photo/scientist-chemist-checking-strawberry-using-medical-tweezers-working-biotechnology-laboratory_482257-4551.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Soil Texture Analysis",
      content:
        "Determine the soil texture (sand, silt, clay) to optimize water retention and crop growth.",
      image:
        "https://img.freepik.com/premium-photo/comparison-good-quality-soil-layers-with-low-soil-quality-occurring-nature_42044-4219.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Moisture Testing",
      content:
        "Analyze soil moisture levels to schedule efficient irrigation and conserve water.",
      image:
        "https://img.freepik.com/free-photo/researcher-holds-test-tube-with-water-hand-blue-glove_8353-7165.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Soil Organic Matter",
      content:
        "Assess the organic matter content to improve soil fertility and promote sustainable agriculture.",
      image:
        "https://img.freepik.com/premium-photo/manure-with-technology-icon-around-agricultural_38663-816.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
   
      
  ];

  return (
    <div className="container ">
      <h2 className="text-center mb-4">Soil Testing Services</h2>
      <p className="text-center mb-4">
        Comprehensive soil testing services to optimize soil health and improve crop productivity.
      </p>
      <div className="row">
        {soilServices.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card  h-100">
              <img
                src={service.image}
                alt={service.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoilTestingServices;
