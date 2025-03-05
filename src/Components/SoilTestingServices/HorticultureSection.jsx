import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import 'aos/dist/aos.css'

function HorticultureSection() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    },[])
  })
  const horticultureData = [
    {
      title: "Fruits",
      description:
        "Fruits are an essential part of horticulture, grown for their nutritional value and taste.",
      crops: ["Mango", "Banana", "Guava", "Apple", "Grapes", "Orange"],
      regions: "Uttar Pradesh, Maharashtra, Tamil Nadu, Himachal Pradesh, Punjab",
      image:
        "https://img.freepik.com/free-photo/top-view-vegetables-fruits-zucchini-bell-peppers-cherry-tomatoes-cumcuat-apple-quince-cucumber-lettuce_140725-59439.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Vegetables",
      description:
        "Vegetables include a wide range of crops grown for their edible parts such as roots, leaves, and fruits.",
      crops: ["Tomato", "Potato", "Onion", "Carrot", "Cabbage", "Spinach"],
      regions: "West Bengal, Uttar Pradesh, Punjab, Maharashtra, Karnataka",
      image:
        "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Flowers",
      description:
        "Flowers are grown for their aesthetic value, fragrance, and use in industries like perfumery and decoration.",
      crops: ["Rose", "Marigold", "Jasmine", "Carnation", "Lily", "Tulip"],
      regions: "Karnataka, Tamil Nadu, West Bengal, Andhra Pradesh, Maharashtra",
      image:
        "https://img.freepik.com/free-photo/gorgeous-arrangement-flowers-wallpaper_23-2149057015.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Spices",
      description:
        "Spices are aromatic crops used for flavoring, coloring, and preserving food.",
      crops: ["Turmeric", "Cardamom", "Pepper", "Ginger", "Clove", "Cumin"],
      regions: "Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Sikkim",
      image:
        "https://img.freepik.com/premium-photo/assortment-spices-ingredients_35641-1063.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Medicinal Plants",
      description:
        "Medicinal plants are cultivated for their therapeutic properties and use in pharmaceuticals.",
      crops: ["Neem", "Tulsi", "Ashwagandha", "Aloe Vera", "Turmeric"],
      regions: "Uttarakhand, Himachal Pradesh, Kerala, Rajasthan, Assam",
      image:
        "https://img.freepik.com/free-photo/top-view-natural-medicinal-spices-herbs_23-2148776497.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Nuts",
      description:
        "Nuts are high-value horticultural crops grown for their nutritional benefits and economic importance.",
      crops: ["Almond", "Cashew", "Walnut", "Pistachio", "Peanut"],
      regions: "Kashmir, Himachal Pradesh, Maharashtra, Karnataka, Gujarat",
      image:
        "https://img.freepik.com/free-photo/set-pecan-pistachios-almond-peanut-cashew-pine-nuts-lined-up-assorted-nuts-dried-fruits-mini-different-bowls_176474-2051.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
  ];

  return (
    <div className="container py-5  data-aos=fade-up">
      <h2 className="text-center mb-4">Horticulture Crops in India</h2>
      <p className="text-center mb-4">
        Explore India's diverse horticultural crops, including fruits, vegetables, flowers, spices, medicinal plants, and nuts.
      </p>
      <div className="row" data-aos="fade-up-right">
        {horticultureData.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card  h-100">
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p>
                  <strong>Crops:</strong> {item.crops.join(", ")}
                </p>
                <p>
                  <strong>Major Regions:</strong> {item.regions}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorticultureSection;
