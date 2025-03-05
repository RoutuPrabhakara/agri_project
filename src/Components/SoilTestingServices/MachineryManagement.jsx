import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
function MachineryManagement() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })

  const machineryData = [
    {
      category: "Soil Preparation",
      machines: [
        {
          title: "Tractors",
          description:
            "Tractors are the backbone of modern farming, used for plowing, tilling, and other preparatory activities.",
          benefits: [
            "Reduces manual labor",
            "Increases field preparation speed",
            "Compatible with multiple farming tools",
          ],
          image:
            "https://img.freepik.com/free-photo/tractor-agricultural-machine-working-field_342744-499.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
        {
          title: "Rotavators",
          description:
            "Rotavators are used for pulverizing and leveling the soil, ensuring a fine seedbed for sowing.",
          benefits: [
            "Improves soil texture",
            "Efficient weed removal",
            "Enhances crop yield",
          ],
          image:
            "https://img.freepik.com/free-photo/tractor-cultivating-field_342744-566.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
      ],
    },
    {
      category: "Crop Planting",
      machines: [
        {
          title: "Seed Drills",
          description:
            "Seed drills ensure precise sowing of seeds, improving seed placement and reducing wastage.",
          benefits: [
            "Uniform seed distribution",
            "Reduces seed wastage",
            "Improves germination rates",
          ],
          image:
            "https://img.freepik.com/premium-photo/tractor-with-seeder-field-early-spring_73164-1115.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
        {
          title: "Transplanters",
          description:
            "Machines used to transplant seedlings like rice and vegetables efficiently.",
          benefits: [
            "Reduces time and labor",
            "Ensures proper seedling spacing",
            "Enhances crop establishment",
          ],
          image:
            "https://img.freepik.com/free-photo/african-american-organic-farm-worker-entering-building-while-pushing-rack-with-lettuce-sprouts-ready-planting-caucasian-man-closing-door-after-picker-going-inside-with-vegetables-seedlings_482257-49632.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
      ],
    },
    {
      category: "Harvesting",
      machines: [
        {
          title: "Combine Harvesters",
          description:
            "Combine harvesters are multi-purpose machines that perform harvesting, threshing, and cleaning in one go.",
          benefits: [
            "Saves time and labor",
            "Reduces crop loss",
            "Efficient for large-scale farms",
          ],
          image:
            "https://img.freepik.com/premium-photo/harvests-wheat-by-harvesters_118565-8.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
        {
          title: "Threshers",
          description:
            "Threshers separate grains from harvested crops like wheat, rice, and maize.",
          benefits: [
            "Increases efficiency",
            "Reduces post-harvest losses",
            "Suitable for small and large farms",
          ],
          image:
            "https://img.freepik.com/free-photo/combine-harvester-working-wheat-field_342744-508.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
      ],
    },
    {
      category: "Irrigation",
      machines: [
        {
          title: "Sprinkler Systems",
          description:
            "Sprinkler systems distribute water uniformly across the field, mimicking rainfall.",
          benefits: [
            "Conserves water",
            "Reduces soil erosion",
            "Ideal for uneven terrain",
          ],
          image:
            "https://img.freepik.com/premium-photo/sprinkler-spraying-water-greenhouse_1048944-17514439.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
        {
          title: "Drip Irrigation Kits",
          description:
            "Drip irrigation delivers water directly to plant roots, optimizing water usage.",
          benefits: [
            "Minimizes water wastage",
            "Improves plant health",
            "Suitable for horticultural crops",
          ],
          image:
            "https://img.freepik.com/free-photo/greenhouse-still-life_23-2148127861.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Machinery Management for Farmers</h2>
      <p className="text-center mb-4">
        Explore the essential machinery and equipment that empower farmers to achieve higher efficiency, reduce labor, and maximize productivity.
      </p>

      {machineryData.map((category, catIndex) => (
        <div key={catIndex} className="mb-5" data-aos="fade-up-left">
          <h3 className="text-center mb-4">{category.category}</h3>
          <div className="row">
            {category.machines.map((machine, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100">
                  <img
                    src={machine.image}
                    alt={machine.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{machine.title}</h5>
                    <p className="card-text">{machine.description}</p>
                    <p>
                      <strong>Benefits:</strong>
                      <ul>
                        {machine.benefits.map((benefit, idx) => (
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

export default MachineryManagement;
