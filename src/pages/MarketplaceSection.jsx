import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
function MarketplaceSection() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })
  const features = [
    {
      title: "Buy Farming Tools",
      content: "Access a wide variety of tools for modern farming.",
      image: "https://img.freepik.com/premium-photo/small-ceramic-flower-pots-gloves-gardening-tools-green-leaves-grey-background-spring-garden-works-concept-flat-lay-top-view-copy-space_120485-13661.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Sell Your Equipment",
      content: "List your farming equipment to reach buyers directly.",
      image: "https://img.freepik.com/premium-photo/rear-view-man-standing-factory_1048944-9409117.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Compare Prices",
      content: "Find the best deals by comparing prices from multiple sellers.",
      image: "https://img.freepik.com/free-photo/best-price-offer-promotion-commerce-marketing-concept_53876-125395.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Quality Assurance",
      content: "Verified listings ensure you get the best products.",
      image: "https://img.freepik.com/free-photo/quality-assurance-clipboard-icon_53876-123828.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Seeds and Fertilizers",
      content: "Buy high-quality seeds and fertilizers directly from suppliers.",
      image: "https://img.freepik.com/free-photo/top-view-soil-plants_23-2148928443.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Bulk Purchases",
      content: "Save more with bulk purchasing options for tools and supplies.",
      image: "https://img.freepik.com/free-photo/still-life-supply-chain-representation_23-2149827286.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Secure Payments",
      content: "Enjoy secure online payment options to protect your transactions.",
      image: "https://img.freepik.com/free-photo/3d-illustration-payment-terminal-smartphone_107791-17710.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Localized Listings",
      content: "Discover nearby sellers and buyers for faster delivery and pickups.",
      image: "https://img.freepik.com/free-photo/3d-view-map_23-2150472727.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Discounts and Offers",
      content: "Grab exclusive discounts and offers on tools and equipment.",
      image: "https://img.freepik.com/premium-photo/happy-smiling-handsome-couple-man-woman-with-discount-up-70-sign-colorful-shopping-bags_97712-1359.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Easy Navigation",
      content: "Browse and filter products effortlessly with user-friendly navigation tools.",
      image: "https://img.freepik.com/free-photo/3d-view-map_23-2150471691.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Marketplace</h2>
      <p className="text-center mb-4">
        Discover the best tools, seeds, and equipment for your farming needs. Buy, sell, and explore with ease!
      </p>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4 mb-4" data-aos='zoom-in-right'>
            <div className="card shadow h-100">
              <img
                src={feature.image}
                alt={feature.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketplaceSection;
