import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

function OrganicFarmingSection() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })
  const organicData = [
    {
      title: "Composting",
      content:
        "Composting involves recycling organic waste like plant residues, food scraps, and manure to create nutrient-rich organic fertilizers.",
      suitableCrops: "Vegetables, Fruits, Pulses, and Cereals",
      benefits: [
        "Improves soil fertility",
        "Enhances water retention",
        "Reduces waste in landfills",
      ],
      image:
        "https://img.freepik.com/premium-photo/trash-recycling-soil-garbage_1170040-13.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Crop Rotation",
      content:
        "Crop rotation is the practice of alternating crops in the same field to break pest cycles and improve soil health.",
      suitableCrops: "Legumes, Vegetables, Cereals",
      benefits: [
        "Prevents soil erosion",
        "Reduces pests and diseases",
        "Improves crop yield",
      ],
      image:
        "https://img.freepik.com/free-photo/aerial-shot-beautiful-agricultural-green-field-near-mountains_181624-40867.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Natural Pest Control",
      content:
        "Using natural predators like ladybugs and neem-based solutions to control harmful pests instead of chemical pesticides.",
      suitableCrops: "Fruits, Vegetables, Pulses",
      benefits: [
        "Reduces chemical usage",
        "Preserves beneficial insects",
        "Minimizes crop damage",
      ],
      image:
        "https://img.freepik.com/premium-photo/indian-farmer-spraying-pesticide-cotton-field_54391-5825.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Green Manuring",
      content:
        "Growing plants like clover and alfalfa to enrich soil nutrients, improve structure, and prevent erosion.",
      suitableCrops: "Cereals, Vegetables, Fruits",
      benefits: [
        "Boosts organic matter in soil",
        "Improves soil aeration",
        "Supports sustainable farming",
      ],
      image:
        "https://img.freepik.com/free-photo/beautiful-green-young-hot-pepper_1161-672.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Vermicomposting",
      content:
        "Using earthworms to decompose organic waste and create nutrient-rich organic fertilizers.",
      suitableCrops: "Horticultural Crops, Vegetables, Fruits",
      benefits: [
        "Increases plant growth",
        "Improves soil structure",
        "Environmentally friendly",
      ],
      image:
        "https://img.freepik.com/free-photo/compost-still-life-concept-with-earthworms_23-2149068942.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Organic Mulching",
      content:
        "Applying organic materials like straw, leaves, and grass to conserve moisture and suppress weeds.",
      suitableCrops: "Vegetables, Fruits, Cereals",
      benefits: [
        "Reduces water loss",
        "Prevents weed growth",
        "Regulates soil temperature",
      ],
      image:
        "https://img.freepik.com/premium-photo/man-work-blows-off-yellow-red-fallen-autumn-leaves-cleaning-yard-with-wind-turbine_73110-2775.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
   
      
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Organic Farming Techniques</h2>
      <p className="text-center mb-4">
        Explore sustainable and eco-friendly organic farming methods, their benefits, and suitable crops.
      </p>
      <div className="row">
        {organicData.map((data, index) => (
          <div key={index} className="col-md-4 mb-4" data-aos='fade-down-left'>
            <div className="card  h-100">
              <img
                src={data.image}
                alt={data.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.content}</p>
                <p>
                  <strong>Suitable Crops:</strong> {data.suitableCrops}
                </p>
                <p>
                  <strong>Benefits:</strong>
                  <ul>
                    {data.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganicFarmingSection;
