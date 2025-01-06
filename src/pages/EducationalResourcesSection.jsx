import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EducationalResourcesSection() {
  const resources = [
    {
      title: "Guides for Modern Farming",
      content: "Explore comprehensive guides on modern farming techniques.",
      image: "https://img.freepik.com/premium-photo/farmers-using-technology-livestock-management_251317-3718.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Video Tutorials",
      content: "Watch step-by-step video tutorials on farming practices and equipment usage.",
      image: "https://img.freepik.com/free-photo/virtual-classroom-study-space_23-2149178619.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Crop Management Tips",
      content: "Learn how to manage crops effectively with expert advice.",
      image: "https://img.freepik.com/premium-photo/owner-farm-standing-cornfield-inspects-crop-farmer-is-watching-growth-crop-with-tablet_217236-17086.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Soil Testing Techniques",
      content: "Access tutorials on how to test and improve soil quality for better yields.",
      image: "https://img.freepik.com/free-photo/man-white-shirt-works-with-cement_1157-37359.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Pest Control Strategies",
      content: "Discover safe and effective methods for controlling pests.",
      image: "https://img.freepik.com/free-photo/woman-growing-plants_23-2148918534.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Weather Impact Analysis",
      content: "Understand how weather impacts crops and learn mitigation strategies.",
      image: "https://img.freepik.com/premium-photo/weather-forecast-interface-digital-display-showing-hot-weather-daysselective-focus_334782-4171.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Organic Farming Resources",
      content: "Transition to organic farming with the help of detailed resources and guides.",
      image: "https://img.freepik.com/free-photo/top-view-veggies-with-salad-tool_23-2148622470.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Financial Planning Tools",
      content: "Access resources to help with budgeting, loans, and farming subsidies.",
      image: "https://img.freepik.com/free-photo/top-view-desk-concept-with-cement-background_23-2148236872.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Irrigation Techniques",
      content: "Learn modern irrigation techniques to save water and improve yields.",
      image: "https://img.freepik.com/premium-photo/irrigation-system-action-vegetable-planting_74436-676.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Community Forums",
      content: "Join community forums to discuss, share, and learn from fellow farmers.",
      image: "https://img.freepik.com/free-photo/hand-selecting-photo-virtual-screen_1134-606.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Educational Resources</h2>
      <p className="text-center mb-4">
        Empower yourself with our carefully curated educational resources for modern farming and beyond!
      </p>
      <div className="row">
        {resources.map((resource, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={resource.image}
                alt={resource.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{resource.title}</h5>
                <p className="card-text">{resource.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationalResourcesSection;
