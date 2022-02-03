import React from "react";
import "./Catcard.css";

function Catcard({ title, imageUrl }) {
  return (
    <div className="catCard">
      <div className="catCard-container">
        <div className="catImage-container">
          <img src={imageUrl} alt="picture of cat" />
        </div>
        <div className="catCard-title">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Catcard;
