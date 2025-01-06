import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

function HowItWorksSection() {
  const steps = [
    {
      icon: "bi-cloud-sun",
      title: "Real-Time Weather Updates",
      content: "Get daily and weekly weather forecasts to plan ahead.",
      link:'/reatime-weather'
    },
    {
      icon: "bi-shop-window",
      title: "Marketplace",
      content: "Buy and sell tools, seeds, and machinery securely.",
      link:'/realtime-Market'
    },
    {
      icon: "bi-book",
      title: "Educational Resources",
      content: "Learn modern farming techniques through guides and videos.",
      link:'/realtime-Educational'
    },
    {
      icon: "bi-bell",
      title: "Extreme Weather Alerts",
      content: "Receive notifications for dangerous weather conditions.",
      link:'/realtime-Extreme'
    },
    {
      icon: "bi-graph-up",
      title: "Crop Price Updates",
      content: "Get daily updates on crop and livestock prices in your area.",
      link:'/realtime-CropPrice'
    },
    {
      icon: "bi-gear",
      title: "Tools and Equipment",
      content: "Browse tools to improve your farming efficiency.",
      link:"/realtime-Tools"
    },
    {
      icon: "bi-droplet",
      title: "Irrigation Tips",
      content: "Learn about advanced irrigation and water management methods.",
      link:'/realtime-Irrigations'
    },
    {
      icon: "bi-shield-check",
      title: "Government Schemes",
      content: "Access subsidies, loans, and insurance details.",
      link:'/realtime-Government'
    },
    {
      icon: "bi-chat",
      title: "Community Support",
      content: "Join forums to share knowledge and solve farming challenges.",
      link:'/realtime-Community'
    },
    {
      icon: "bi-compass",
      title: "Navigation to Markets",
      content: "Find the nearest market or buyers for your produce.",
      link:'/realtime-NavigationToMarkets'
    },
  ];

  return (
    <div className="how-it-works-section container py-5">
      <h2 className="text-center mb-4">How It Works</h2>
      <div className="row">
        {steps.map((step, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-center p-3 shadow h-100">
              <div className=" mb-3">
                <i className={`bi ${step.icon} display-4 text-success`}></i>
              </div>
              <h5 className="card-title">{step.title}</h5>
              <p className="card-text">{step.content}</p>

              <a href={step.link} className="btn btn-success mt-2 d-block w-100 rounded- q   pill">Know more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorksSection;
