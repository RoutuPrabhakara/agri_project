import React from 'react'
import './Style.css'
function Feature() {
    const marketplaceWeatherEducationSchemes = [
        // Marketplace
        {
          category: "Marketplace",
          title: "Online Crop Selling",
          description: "Sell your crops directly to buyers without intermediaries, ensuring better profits.",
          icon: "bi-shop"
        },
        {
          category: "Marketplace",
          title: "Farm Equipment Rentals",
          description: "Rent tractors, harvesters, and other farming equipment easily from local providers.",
          icon: "bi-tools"
        },
        {
          category: "Marketplace",
          title: "Organic Products Marketplace",
          description: "Buy and sell organic produce in a platform dedicated to sustainable farming.",
          icon: "bi-basket3"
        },
        {
          category: "Marketplace",
          title: "Livestock Trade",
          description: "Connect with buyers and sellers for trading livestock locally and nationally.",
          icon: "bi-cart-plus"
        },
      
        // Weather
        {
          category: "Weather",
          title: "Real-Time Weather Updates",
          description: "Get live weather updates to plan your farming activities efficiently.",
          icon: "bi-cloud-sun"
        },
        {
          category: "Weather",
          title: "Seasonal Forecasts",
          description: "Access long-term forecasts to prepare for upcoming farming seasons.",
          icon: "bi-calendar2-week"
        },
        {
          category: "Weather",
          title: "Rainfall Alerts",
          description: "Receive alerts about rainfall and storms to protect your crops.",
          icon: "bi-cloud-rain"
        },
        {
          category: "Weather",
          title: "Drought Monitoring",
          description: "Monitor drought conditions and receive tips to mitigate its effects.",
          icon: "bi-droplet"
        },
      
        // Education
        {
          category: "Education",
          title: "Agricultural Training",
          description: "Learn modern farming techniques through online and offline training sessions.",
          icon: "bi-mortarboard"
        },
        {
          category: "Education",
          title: "Farming Best Practices",
          description: "Access guides and videos on pest control, soil health, and sustainable practices.",
          icon: "bi-book"
        },
        {
          category: "Education",
          title: "Livestock Care Courses",
          description: "Learn how to improve livestock health and productivity with expert courses.",
          icon: "bi-heart-pulse"
        },
        {
          category: "Education",
          title: "Agri-Tech Workshops",
          description: "Stay updated with the latest agricultural technologies and innovations.",
          icon: "bi-laptop"
        },
      
        // Government Schemes
        {
          category: "Government Schemes",
          title: "Subsidy Programs",
          description: "Discover subsidy programs for seeds, fertilizers, and equipment.",
          icon: "bi-cash-stack"
        },
        {
          category: "Government Schemes",
          title: "Crop Insurance Plans",
          description: "Protect your crops with government-backed insurance schemes.",
          icon: "bi-shield-check"
        },
        {
          category: "Government Schemes",
          title: "Farmer Welfare Schemes",
          description: "Explore welfare programs designed to support farmers and their families.",
          icon: "bi-people"
        },
        {
          category: "Government Schemes",
          title: "Irrigation Projects",
          description: "Learn about government-funded irrigation projects in your region.",
          icon: "bi-water"
        }
      ];
      
  return (
    <div className='p-3 p-mb-5 container-fluid '>
        <h1 className="display-3 fw-bold text-center my-5 ">Features</h1>
        <div className='row justify-content-center'>
            {
                marketplaceWeatherEducationSchemes.map((item,index)=>(
                   <div className="col-md-3 col-sm-6  mb-3">
                     <div className="Feture-card  card text-center p-3 h-100  ">
                  <div className="icon">
                  <i className={item.icon}></i>
                  </div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                      </div>
                   </div>
                ))
            }
        </div>
    </div>
  )
}

export default Feature