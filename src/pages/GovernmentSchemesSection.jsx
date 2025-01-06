import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function GovernmentSchemesSection() {
  const schemes = [
    {
      title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      content:
        "Provides income support to small and marginal farmers with direct cash transfers.",
      image:
        "https://img.freepik.com/premium-photo/cute-indian-farmer-child-school-uniform-with-his-father-agriculture-field_898049-760.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Soil Health Card Scheme",
      content:
        "Promotes sustainable farming by providing farmers with soil health insights.",
      image:
        "https://img.freepik.com/premium-photo/young-sprout-glowing-holograms-top-view-plant-care-concept_270100-2775.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "PM Fasal Bima Yojana",
      content:
        "Offers crop insurance against natural calamities and unforeseen risks.",
      image:
        "https://img.freepik.com/premium-photo/indian-farmer-holding-crop-plant-his-wheat-field_75648-691.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Kisan Credit Card (KCC)",
      content:
        "Enables farmers to access short-term credit for agricultural needs at lower interest rates.",
      image:
        "https://img.freepik.com/premium-photo/young-indian-farmer-showing-debit-credit-card-his-green-agriculture-field_75648-7299.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "PM Krishi Sinchai Yojana",
      content:
        "Focuses on water conservation and efficient use of water resources for irrigation.",
      image:
        "https://img.freepik.com/premium-photo/indian-agronomist-with-farmer-field_75648-67.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "National Horticulture Mission",
      content:
        "Promotes growth in the horticulture sector with financial support and guidance.",
      image:
        "https://img.freepik.com/premium-photo/tree-growing-soil-human-hands-plant-growth-factor-icon-plant-growth-concept_104677-749.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "E-NAM (National Agriculture Market)",
      content:
        "Provides farmers access to a unified online marketplace to sell produce.",
      image:
        "https://img.freepik.com/free-photo/fresh-organic-vegetables-local-food-market_23-2148209728.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Paramparagat Krishi Vikas Yojana (PKVY)",
      content:
        "Supports organic farming practices and sustainable agriculture.",
      image:
        "https://img.freepik.com/free-photo/focused-male-gardener-growing-evergreen-plants-gray-haired-middle-aged-man-glasses-wearing-blue-shirt-apron-checking-small-thujas-greenhouse-commercial-gardening-summer-concept_74855-12789.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Government Schemes</h2>
      <p className="text-center mb-4">
        Explore government initiatives and schemes designed to empower farmers and promote sustainable agriculture.
      </p>
      <div className="row">
        {schemes.map((scheme, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={scheme.image}
                alt={scheme.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{scheme.title}</h5>
                <p className="card-text">{scheme.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GovernmentSchemesSection;
