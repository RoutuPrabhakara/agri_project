import React, { useEffect } from 'react'
import './Style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Feature() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    const marketplaceWeatherEducationSchemes = [
        // Marketplace
        {
          category: "Marketplace",
          title: "Online Crop Selling",
          description: "Sell your crops directly to buyers without intermediaries, ensuring better profits.",
          icon: "bi-shop",
          link:'/realtime-CropPrice'
        },
        {
          category: "Marketplace",
          title: "Farm Equipment Rentals",
          description: "Rent tractors, harvesters, and other farming equipment easily from local providers.",
          icon: "bi-tools",
          link:'/realtime-MachineryManagement'
          
        },
        {
          category: "Marketplace",
          title: "Organic Products Marketplace",
          description: "Buy and sell organic produce in a platform dedicated to sustainable farming.",
          icon: "bi-basket3",
          link:'/realtime-Organic'
        },
        {
          category: "Marketplace",
          title: "Livestock Trade",
          description: "Connect with buyers and sellers for trading livestock locally and nationally.",
          icon: "bi-cart-plus",
          link:'/realtime-CropPrice'
        },
      
        // Weather
        {
          category: "Weather",
          title: "Real-Time Weather Updates",
          description: "Get live weather updates to plan your farming activities efficiently.",
          icon: "bi-cloud-sun",
          link:"/realtime-Weather"
        },
        {
          category: "Weather",
          title: "Seasonal Forecasts",
          description: "Access long-term forecasts to prepare for upcoming farming seasons.",
          icon: "bi-calendar2-week",
          link:'/realtime-SeasonCrops',
        },
        {
          category: "Weather",
          title: "Rainfall Alerts",
          description: "Receive alerts about rainfall and storms to protect your crops.",
          icon: "bi-cloud-rain",
          link:'/realtime-SeasonCrops',
        },
        {
          category: "Weather",
          title: "Drought Monitoring",
          description: "Monitor drought conditions and receive tips to mitigate its effects.",
          icon: "bi-droplet",
          link:'/realtime-SeasonCrops',
        },
      
        // Education
        {
          category: "Education",
          title: "Agricultural Training",
          description: "Learn modern farming techniques through online and offline training sessions.",
          icon: "bi-mortarboard",
          link:'/realtime-Educational'
        },
        {
          category: "Education",
          title: "Farming Best Practices",
          description: "Access guides and videos on pest control, soil health, and sustainable practices.",
          icon: "bi-book",
          link:'/realtime-Educational'
        },
        {
          category: "Education",
          title: "Livestock Care Courses",
          description: "Learn how to improve livestock health and productivity with expert courses.",
          icon: "bi-heart-pulse",
          link:'/realtime-Educational'
        },
        {
          category: "Education",
          title: "Agri-Tech Workshops",
          description: "Stay updated with the latest agricultural technologies and innovations.",
          icon: "bi-laptop",
          link:'/realtime-Educational'
        },
      
        // Government Schemes
        {
          category: "Government Schemes",
          title: "Subsidy Programs",
          description: "Discover subsidy programs for seeds, fertilizers, and equipment.",
          icon: "bi-cash-stack",
          link:'/realtime-Government'
        },
        {
          category: "Government Schemes",
          title: "Crop Insurance Plans",
          description: "Protect your crops with government-backed insurance schemes.",
          icon: "bi-shield-check",
          link:'/realtime-Government'

        },
        {
          category: "Government Schemes",
          title: "Farmer Welfare Schemes",
          description: "Explore welfare programs designed to support farmers and their families.",
          icon: "bi-people",
          link:'/realtime-Government'
        },
        {
          category: "Government Schemes",
          title: "Irrigation Projects",
          description: "Learn about government-funded irrigation projects in your region.",
          icon: "bi-water",
          link:"/realtime-Irrigations"
        }
      ];

     
      
  return (
    <div className='p-4 p-mb-5 container-fluid'>
        <h1 className="feature display-3 fw-bold text-center my-5 py-5  text-success">Features</h1>
        <div className='row justify-content-center' data-aos ="fade-up-right">
            {
                marketplaceWeatherEducationSchemes.map((item,index)=>(
                   <div className="col-md-3 col-sm-6  mb-3" key={index}>
                     <div className="Feture-card  card text-center p-3 h-100  ">
                  <div className="icon">
                  <i className={item.icon}></i>
                  </div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>

                    <a href={item.link} className="btn btn-success mt-2 d-block w-100 rounded- q   pill">Know more</a>
                      </div>
                   </div>
                ))
            }
        </div>
    </div>
  )
}

export default Feature