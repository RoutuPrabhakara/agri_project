import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationToMarkets() {
  const markets = [
    {
      name: "City Farmers Market",
      location: "Downtown, Main Street",
      description: "A bustling market with fresh produce, grains, and livestock.",
      image:
        "https://img.freepik.com/premium-photo/young-adult-smelling-colorful-bio-apples-organic-marketplace-with-african-american-farmer-enjoying-natural-harvest-woman-buying-fresh-locally-grown-fruits-vegetables-outside_482257-65944.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
      mapLink: "https://www.google.com/maps?q=City+Farmers+Market",
    },
    {
      name: "Green Valley Market",
      location: "Green Valley, Sector 21",
      description:
        "Specializes in organic crops, fresh vegetables, and dairy products.",
      image:
        "https://img.freepik.com/premium-photo/pretty-young-woman-buying-vegetables-market_52137-15010.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
      mapLink: "https://www.google.com/maps?q=Green+Valley+Market",
    },
    {
      name: "Riverbank Wholesale Market",
      location: "Near Riverbank Industrial Area",
      description:
        "Known for bulk purchases and competitive pricing for grains and pulses.",
      image:
        "https://img.freepik.com/free-photo/full-shot-woman-kid-market_23-2149160669.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
      mapLink: "https://www.google.com/maps?q=Riverbank+Wholesale+Market",
    },
    {
      name: "Eastern Agri Market",
      location: "Eastern Highway, Sector 45",
      description: "Specializes in export-quality crops and exotic fruits.",
      image:
        "https://img.freepik.com/free-photo/side-view-women-shopping-groceries_23-2149461693.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
      mapLink: "https://www.google.com/maps?q=Eastern+Agri+Market",
    },
    {
      name: "Mountain View Livestock Market",
      location: "Mountain View Hills, Block C",
      description: "A market for livestock trading and farm equipment.",
      image:
        "https://img.freepik.com/free-photo/herd-cows-lying-grazing-grassy-pasture-farm_181624-30769.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
      mapLink: "https://www.google.com/maps?q=Mountain+View+Livestock+Market",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Navigation to Markets</h2>
      <p className="text-center mb-4">
        Discover nearby markets and navigate to them with ease for all your agricultural needs.
      </p>
      <div className="row">
        {markets.map((market, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={market.image}
                alt={market.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{market.name}</h5>
                <p className="card-text">{market.description}</p>
                <p className="text-muted">{market.location}</p>
                <a
                  href={market.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Navigate to Market
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationToMarkets;
