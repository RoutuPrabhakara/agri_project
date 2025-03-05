import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

function TrainingPrograms() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })
  const programsData = [
    {
      category: "Crop Management Training Programs",
      programs: [
        {
          institute: "Punjab Agricultural University (PAU)",
          location: "Ludhiana, Punjab",
          description:
            "Specializes in crop management techniques with a focus on wheat and rice cultivation.",
          programs: [
            "High-Yield Wheat Cultivation",
            "Integrated Crop Management",
            "Irrigation Optimization for Paddy",
          ],
          benefits: [
            "Increased yield efficiency",
            "Improved water management",
            "ICOR-certified curriculum",
          ],
          image:
            "https://images.shiksha.com/mediadata/images/1532774478phpfR1Vvz.png",
        },
        {
          institute: "University of Agricultural Sciences (UAS)",
          location: "Bangalore, Karnataka",
          description:
            "Offers a comprehensive training program for multi-crop cultivation and pest control.",
          programs: [
            "Multi-Crop Cultivation Techniques",
            "Natural Pest Management",
            "Crop Yield Optimization",
          ],
          benefits: [
            "Holistic approach to farming",
            "Hands-on pest control methods",
            "ICOR certification",
          ],
          image:
            "https://education.icar.gov.in/univ_info_file/190-000un.jpg",
        },
      ],
    },
    {
      category: "Sustainable Agriculture and Organic Farming",
      programs: [
        {
          institute: "International Centre for Organic Farming",
          location: "Pune, Maharashtra",
          description:
            "Focuses on promoting organic farming practices to reduce chemical dependency.",
          programs: [
            "Compost Production Techniques",
            "Natural Fertilizer Application",
            "Organic Certification Standards",
          ],
          benefits: [
            "Eco-friendly farming methods",
            "Healthier soil and crops",
            "Global recognition with ICOR",
          ],
          image:
            "https://img.freepik.com/free-photo/focused-male-gardener-growing-evergreen-plants-gray-haired-middle-aged-man-glasses-wearing-blue-shirt-apron-checking-small-thujas-greenhouse-commercial-gardening-summer-concept_74855-12789.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
        },
        {
          institute: "Kerala Agricultural University (KAU)",
          location: "Thrissur, Kerala",
          description:
            "Provides training in sustainable agriculture, agroforestry, and soil conservation.",
          programs: [
            "Soil Erosion Control Techniques",
            "Agroforestry Systems",
            "Climate-Resilient Farming",
          ],
          benefits: [
            "Promotes biodiversity",
            "Sustainable land use",
            "ICOR-accredited programs",
          ],
          image:
            "https://i.ytimg.com/vi/pnkBO-gsjtc/maxresdefault.jpg",
        },
      ],
    },
    {
      category: "Agricultural Technology and Exports",
      programs: [
        {
          institute: "Agri-Tech Research Institute",
          location: "Ahmedabad, Gujarat",
          description:
            "Provides advanced training in the use of agricultural technology and IoT solutions.",
          programs: [
            "Precision Farming with Drones",
            "IoT in Agriculture",
            "Agri-Export Policies",
          ],
          benefits: [
            "Cutting-edge technology training",
            "Global market insights",
            "ICOR-certified trainers",
          ],
          image:
            "https://images.shiksha.com/mediadata/images/articles/1581666711phpqE5YpH.jpeg",
        },
        {
          institute: "Export Promotion Council for Agriculture",
          location: "Mumbai, Maharashtra",
          description:
            "Focuses on agricultural exports with an emphasis on quality control and packaging.",
          programs: [
            "Post-Harvest Quality Standards",
            "Export Documentation",
            "Cold Chain Management",
          ],
          benefits: [
            "Increased global competitiveness",
            "Standardized packaging methods",
            "ICOR global certification",
          ],
          image:
            "data:image/png;base64,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",
        },
      ],
    },
  ];

  return (
    <div className="container ">
      <h2 className="text-center mb-4">Agricultural Training Programs</h2>
      <p className="text-center mb-4">
        Explore ICAR-certified training programs across multiple categories, from crop management to advanced technology in agriculture.
      </p>
      {programsData.map((categoryData, categoryIndex) => (
        <div key={categoryIndex} className="mb-5" data-aos='flip-down'>
          <h3 className="mb-3">{categoryData.category}</h3>
          <div className="row">
            {categoryData.programs.map((program, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100">
                  <img
                    src={program.image}
                    alt={program.institute}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{program.institute}</h5>
                    <p className="text-muted">{program.location}</p>
                    <p className="card-text">{program.description}</p>
                    <h6>Programs Offered:</h6>
                    <ul>
                      {program.programs.map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                    </ul>
                    <h6>Benefits:</h6>
                    <ul>
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
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

export default TrainingPrograms;
