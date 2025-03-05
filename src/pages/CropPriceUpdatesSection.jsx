import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from 'aos'
import  'aos/dist/aos.css'
function CropPriceUpdatesSection() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })
  const updates = [
    {
      title: "Daily Crop Prices",
      content: "Stay updated with daily price changes for essential crops in your region.",
      image: "https://img.freepik.com/premium-photo/land-value-landscape-green-field-agriculture-farm-growth-graph-real-estate-property-business-2023-selective-focus_955139-9166.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Commodity Price Trends",
      content: "Analyze weekly and monthly trends to make informed decisions about buying or selling crops.",
      image: "https://img.freepik.com/free-photo/graphic-tablet_1134-354.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Real-Time Updates",
      content: "Access live price updates for grains, vegetables, and fruits.",
      image: "https://img.freepik.com/free-photo/standard-quality-control-collage_23-2149631015.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Regional Market Prices",
      content: "Compare crop prices across different regional markets.",
      image: "https://img.freepik.com/free-photo/currency-exchange-display-board_1101-410.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Livestock Prices",
      content: "Get current rates for livestock such as poultry, cattle, and sheep.",
      image: "https://img.freepik.com/free-photo/male-farmer-tending-his-goats-farm_23-2149211784.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Export Pricing Info",
      content: "Explore export prices to expand your business to global markets.",
      image: "https://img.freepik.com/free-photo/sales-accounting-financial-selling-banking-concept_53876-13726.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Subsidy Awareness",
      content: "Learn about government subsidies and their impact on crop prices.",
      image: "https://img.freepik.com/premium-photo/man-presents-indian-rupee-money-bag-as-offer-exchange-house_72572-6873.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Organic Crop Prices",
      content: "Get detailed pricing information for organic crops and products.",
      image: "https://img.freepik.com/premium-photo/young-indian-agronomist-financier-showing-zero-percent-sign-symbol-agriculture-field_54391-5302.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Demand-Supply Analysis",
      content: "Understand demand and supply dynamics affecting crop prices.",
      image: "https://img.freepik.com/premium-photo/computer-software-website-traffic-analytics-data-computer-screen-snugly_31965-652311.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Price Alerts",
      content: "Set notifications for price changes and stay ahead in the market.",
      image: "https://img.freepik.com/premium-photo/3d-rendering-megaphone-super-sale-product-promote_542094-192.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Crop Price Updates</h2>
      <p className="text-center mb-4">
        Stay ahead of the market with real-time updates and in-depth price analysis for crops and livestock.
      </p>
      <div className="row">
        {updates.map((update, index) => (
          <div key={index} className="col-md-4 mb-4" data-aos='zoom-in-up'>
            <div className="card shadow h-100">
              <img
                src={update.image}
                alt={update.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{update.title}</h5>
                <p className="card-text">{update.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CropPriceUpdatesSection;
