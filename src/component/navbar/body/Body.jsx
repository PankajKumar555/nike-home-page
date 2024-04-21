import React from "react";
import Slider from "./slider/Slider.jsx";
import Details from "./details/Details.jsx";
import "./Body.css";

const Body = () => {
  return (
    <div className="body-container">
      <Slider />
      <Details />
    </div>
  );
};

export default Body;
