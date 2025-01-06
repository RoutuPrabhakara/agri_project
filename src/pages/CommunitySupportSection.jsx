import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CommunitySupportSection() {
  const supports = [
    {
      title: "Local Farmer Groups",
      content:
        "Join local farming communities to share knowledge, resources, and solutions to common challenges.",
      image:
        "https://img.freepik.com/free-photo/people-picnic_144627-46443.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Agri-Helplines",
      content:
        "Access 24/7 helplines for guidance on farming techniques, pest control, and crop management.",
      image:
        "https://img.freepik.com/premium-photo/young-indian-agronomist-farmer-discuss-greenhouse-polyhouse_75648-2832.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Training Workshops",
      content:
        "Participate in training programs to learn advanced agricultural practices and technologies.",
      image:
        "https://img.freepik.com/premium-photo/medium-shot-people-chatting-work_23-2149300752.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Mentorship Programs",
      content:
        "Get paired with experienced mentors to improve farming techniques and business strategies.",
      image:
        "https://img.freepik.com/free-photo/woman-with-name-tag-speaking-group-therapy-session_23-2148752082.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Seed and Tool Exchanges",
      content:
        "Exchange seeds and tools with other farmers to diversify crops and reduce costs.",
      image:
        "https://img.freepik.com/free-photo/male-female-gardener-s-hand-touching-seedling-black-crate_23-2148165198.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Crowdfunding for Farmers",
      content:
        "Raise funds for farming needs through community-based crowdfunding platforms.",
      image:
        "https://img.freepik.com/free-photo/selling-plant-online-sellers-communicates-with-customer-by-mobile-phone_1150-26618.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Volunteer Networks",
      content:
        "Connect with volunteers for farm assistance during peak seasons or emergencies.",
      image:
        "https://img.freepik.com/free-photo/volunteers-posting-social-media_53876-40342.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Knowledge Sharing Forums",
      content:
        "Join online forums to discuss challenges, share ideas, and find solutions with a global community.",
      image:
        "https://img.freepik.com/premium-photo/online-community-against-telaxed-businessman-with-hands-head-office_1134-74308.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Community Support</h2>
      <p className="text-center mb-4">
        Empowering farmers and communities through collaboration, shared resources, and support networks.
      </p>
      <div className="row">
        {supports.map((support, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={support.image}
                alt={support.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{support.title}</h5>
                <p className="card-text">{support.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunitySupportSection;
