import React from "react";
import "./services.css";
import Images from "./images.jsx";

function Services ({Title, Description, Price=1}) {
  return (
    <div className="services-container">
      <div className="services-header"> 
        <Images />
      </div>
      
      <div className="services-content">
        <h2 className="budget_1">{Title}</h2>
        <p>{Description}</p>
        <p>Price:{Price}</p>
      </div>
    </div>
  );
};

export default Services;
