import React from "react";
import "./services.css";
import Images from "./images.jsx";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header"> 
        <Images />
      </div>
      
      <div className="services-content">
        <h2 className="budget_1">Budget Management</h2>
        <p>Hi this is your buddy</p>
      </div>
    </div>
  );
};

export default Services;
