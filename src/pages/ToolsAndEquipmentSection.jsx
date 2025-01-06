import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ToolsAndEquipmentSection() {
  const tools = [
    {
      title: "Hand Tools",
      content: "Precision tools like screwdrivers, pliers, and wrenches.",
      image: "https://img.freepik.com/premium-photo/set-industrial-tools-isolated-white_266732-25401.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Power Tools",
      content: "Efficient tools like drills, grinders, and saws.",
      image: "https://img.freepik.com/free-photo/repairing-tools_1417-1795.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Construction Equipment",
      content: "Heavy-duty equipment like excavators and cranes.",
      image: "https://img.freepik.com/free-photo/harvesters-combine-parts-plant-are-waiting-sales_146671-19095.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Gardening Tools",
      content: "Shovels, pruners, and lawnmowers for landscaping.",
      image: "https://img.freepik.com/premium-photo/set-gardening-tools-vegetable-seedlings-white-background_495423-31672.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Safety Equipment",
      content: "Helmets, gloves, and goggles for protection.",
      image: "https://img.freepik.com/free-photo/portrait-young-man-worker-weahttps://img.freepik.com/free-photo/tools-table_144627-8672.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
    {
      title: "Specialized Tools",
      content: "High-tech tools like laser cutters and 3D printers.",
      image: "https://img.freepik.com/premium-photo/joinery-tools-blue-place-text_92397-208.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Tools and Equipment</h2>
      <p className="text-center mb-4">
        Discover the right tools for every task, ensuring efficiency and safety in all your projects.
      </p>
      <div className="row">
        {tools.map((tool, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={tool.image}
                alt={tool.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{tool.title}</h5>
                <p className="card-text">{tool.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolsAndEquipmentSection;
