import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="details-container">
      <div className="details-inside-container">
        <h1>Nike Winflow 9</h1>
        <p>Men's road running shoes</p>
        <h2>
          <span style={{ color: "yellow" }}>$ </span>175
        </h2>
        <p>Description</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          fugit. Omnis distinctio quidem necessitatibus! Nesciunt eius
          consequatur nisi maiores officia nemo, inventore impedit, debitis non
          dolor velit soluta quo possimus.
        </p>

        <p>Size</p>
        <div className="details-sizes">
          <p>6</p>
          <p>6.5</p>
          <p>7</p>
          <p>7.5</p>
        </div>
        <input
          type="button"
          placeholder="Add to cart"
          value="Add to cart"
          className="add-btn"
        />
      </div>
    </div>
  );
};

export default Details;
