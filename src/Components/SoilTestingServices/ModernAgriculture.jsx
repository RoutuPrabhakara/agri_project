import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ModernAgriculture() {
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
            "https://img.freepik.com/free-photo/satellite-controlled-agriculture_23-2148906121.jpg",
        },
        {
          title: "Vertical Farming",
          description:
            "A method of growing crops in vertically stacked layers, typically in controlled indoor environments.",
          techniquesUsed: ["Hydroponics", "Aeroponics", "LED lighting systems"],
          benefits: ["Saves land", "Conserves water", "Year-round crop production"],
          image:
            "https://img.freepik.com/free-photo/indoor-farm-lighting_181624-34522.jpg",
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
            "https://img.freepik.com/free-photo/hydroponic-farming-systems_181624-23422.jpg",
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
            "https://img.freepik.com/free-photo/drone-agriculture-field_181624-18762.jpg",
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
            "https://img.freepik.com/free-photo/irrigation-system-working-green-field_181624-25119.jpg",
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
            "https://img.freepik.com/free-photo/organic-farming-concept_53876-123851.jpg",
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
        <div key={catIndex} className="mb-5">
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
