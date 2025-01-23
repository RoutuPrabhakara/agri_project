import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SeasonCrops() {
  const seasonData = [
    {
     
      season: "Kharif",
      description:
        "Kharif crops are sown at the beginning of the monsoon season (June-July) and harvested at the end of the monsoon (September-October). These crops require substantial rainfall.",
      insights: [
        "Rainfall Dependency: Crops in this season rely heavily on the monsoon rains, which are crucial for water-intensive crops like rice and sugarcane.",
        "Common Challenges: Flooding, pests, and erratic rainfall can affect crop yields.",
        "Interesting Fact: India is one of the largest producers of rice, a Kharif crop, contributing significantly to global rice exports.",
      ],
      crops: [
        {
          title: "Agricultural Crops",
          list: ["Rice", "Maize", "Cotton", "Groundnut", "Soybean", "Pulses"],
        },
        {
          title: "Horticultural Crops",
          list: ["Mango", "Banana", "Papaya", "Pineapple", "Chili", "Tomato"],
        },
      ],
      image:
        "https://img.freepik.com/free-photo/large-green-rice-field-with-green-rice-plants-rows_181624-28862.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      season: "Rabi",
      description:
        "Rabi crops are sown during the winter season (October-November) and harvested in spring (March-April). These crops require cool weather and moderate irrigation.",
      insights: [
        "Weather Adaptation: Crops thrive in cool temperatures and require less water compared to Kharif crops.",
        "Irrigation Needs: Rabi crops depend more on irrigation systems, making water management crucial.",
        "Interesting Fact: Wheat, a Rabi crop, is the staple food of northern India and is processed into products like bread, chapatis, and pasta.",
      ],
      crops: [
        {
          title: "Agricultural Crops",
          list: ["Wheat", "Barley", "Mustard", "Peas", "Chickpea", "Lentil"],
        },
        {
          title: "Horticultural Crops",
          list: ["Carrot", "Cabbage", "Cauliflower", "Strawberry", "Onion"],
        },
      ],
      image:
        "https://img.freepik.com/premium-photo/farmer-working-field_1048944-16109746.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      season: "Zaid",
      description:
        "Zaid crops are grown during the short summer season (March-June) between the Kharif and Rabi seasons. These crops thrive in warm weather and have a short growing cycle.",
      insights: [
        "Short Duration: Zaid crops are typically grown for 2-3 months, filling the gap between Kharif and Rabi seasons.",
        "Popular Crops: Fruits like watermelon and muskmelon are highly in demand during the summer, providing farmers with lucrative returns.",
        "Interesting Fact: Zaid crops are important for ensuring food availability during the lean period between major harvests.",
      ],
      crops: [
        {
          title: "Agricultural Crops",
          list: ["Watermelon", "Cucumber", "Muskmelon", "Sunflower", "Moong"],
        },
        {
          title: "Horticultural Crops",
          list: ["Bitter Gourd", "Pumpkin", "Litchi", "Jackfruit"],
        },
      ],
      image:
        "https://img.freepik.com/free-photo/selective-focus-shot-plants-with-green-leaves-field-daytime_181624-20097.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
  ];

  return (
    <div className="container py-5">
      {/* Intro Section */}
      <h2 className="text-center mb-4">Benefits of Seasonal Crop Knowledge</h2>
      <ul className="list-unstyled mb-4">
        <li>
          <strong>Better Crop Planning:</strong> Helps farmers choose the right crops for each season, ensuring high productivity.
        </li>
        <li>
          <strong>Efficient Water Usage:</strong> Seasonal crop knowledge ensures water is used optimally for irrigation during water-scarce periods.
        </li>
        <li>
          <strong>Market Opportunities:</strong> Seasonal crops provide predictable supply patterns, enabling better market pricing and trade strategies.
        </li>
        <li>
          <strong>Sustainable Agriculture:</strong> Rotational cropping based on seasons can prevent soil depletion and encourage biodiversity.
        </li>
      </ul>

      <div className="row">
        {seasonData.map((season, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={season.image}
                alt={season.season}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{season.season} Crops</h5>
                <p className="card-text">{season.description}</p>
                {season.crops.map((cropType, idx) => (
                  <div key={idx}>
                    <h6>{cropType.title}:</h6>
                    <p>{cropType.list.join(", ")}</p>
                  </div>
                ))}
                <h6>Additional Insights:</h6>
                <ul>
                  {season.insights.map((insight, i) => (
                    <li key={i}>{insight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <h5>Call to Action</h5>
        <p>
          <strong>For Farmers:</strong> Learn about crop rotation and seasonal varieties to maximize yields.
        </p>
        <p>
          <strong>For Consumers:</strong> Support local and seasonal produce for a healthier diet and reduced carbon footprint.
        </p>
        <p>
          <strong>For Policymakers:</strong> Promote agricultural policies that address seasonal challenges like drought and flooding.
        </p>
      </div>
    </div>
  );
}

export default SeasonCrops;
