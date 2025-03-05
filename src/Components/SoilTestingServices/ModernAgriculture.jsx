import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

function ModernAgriculture() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })
  const content = [
    {
      category: "Modern Agricultural Techniques",
      techniques: [
        {
          title: "Precision Farming",
          description:
            "Precision farming involves using technology to monitor and manage field variations in crops, enabling farmers to optimize resource usage like water, fertilizers, and pesticides.",
          techniquesUsed: ["GPS mapping", "Soil sensors", "Drone surveillance"],
          benefits: [
            "Increases productivity",
            "Reduces waste",
            "Minimizes environmental impact",
          ],
          image:
            "https://img.freepik.com/free-photo/back-view-man-making-photo-greenery_171337-5935.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
        {
          title: "Vertical Farming",
          description:
            "A method of growing crops in vertically stacked layers, typically in controlled indoor environments.",
          techniquesUsed: ["Hydroponics", "Aeroponics", "LED lighting systems"],
          benefits: ["Saves land", "Conserves water", "Year-round crop production"],
          image:
            "https://img.freepik.com/premium-photo/shelves-with-lettuce-aquaponics-system-combining-fish-aquaculture-with-hydroponics-cultivating-plants-water-artificial-lighting-indoors_709047-241.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
      ],
    },
    {
      category: "Smart Farming Practices",
      techniques: [
        {
          title: "Hydroponics",
          description:
            "A soil-less farming technique where crops grow in nutrient-rich water solutions.",
          benefits: [
            "Requires 90% less water",
            "Grows crops faster",
            "Avoids soil-borne diseases",
          ],
          image:
            "https://img.freepik.com/premium-photo/close-up-vegetable-garden-morning-time-food-background-concept-with-copy-space_44722-75.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
        {
          title: "Agri-Drones",
          description:
            "Drones are used for crop monitoring, spraying fertilizers and pesticides, and even planting seeds.",
          benefits: [
            "Saves time",
            "Ensures even application of inputs",
            "Helps detect crop diseases early",
          ],
          image:
            "https://img.freepik.com/free-photo/drone-spraying-fertilizer-vegetable-green-plants-agriculture-technology-farm-automation_35913-2569.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
      ],
    },
    {
      category: "Sustainable Practices",
      techniques: [
        {
          title: "Drip Irrigation",
          description:
            "A water-efficient irrigation method that delivers water directly to the root zone of plants.",
          benefits: [
            "Reduces water wastage",
            "Prevents weed growth",
            "Improves plant health",
          ],
          image:
            "https://img.freepik.com/premium-photo/greenhouse-watering-system-action_392895-543335.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
        {
          title: "Organic Farming",
          description:
            "A method of farming that avoids synthetic chemicals and focuses on natural processes to maintain soil fertility and crop health.",
          benefits: [
            "Promotes eco-friendly practices",
            "Produces healthier food",
            "Improves soil health",
          ],
          image:
            "https://img.freepik.com/free-photo/closeup-shot-person-picking-tomatoes-off-plant-farm_181624-33347.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Modern Agricultural Practices in India</h2>
      <p className="text-center mb-4">
        Explore the latest agricultural techniques, smart farming solutions, and sustainable practices revolutionizing agriculture in India.
      </p>

      {content.map((category, catIndex) => (
        <div key={catIndex} className="mb-5" data-aos='fade-down-right'>
          <h3 className="text-center mb-4">{category.category}</h3>
          <div className="row">
            {category.techniques.map((technique, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100">
                  <img
                    src={technique.image}
                    alt={technique.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{technique.title}</h5>
                    <p className="card-text">{technique.description}</p>
                    {technique.techniquesUsed && (
                      <p>
                        <strong>Techniques Used:</strong>{" "}
                        {technique.techniquesUsed.join(", ")}
                      </p>
                    )}
                    <p>
                      <strong>Benefits:</strong>
                      <ul>
                        {technique.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ModernAgriculture;
