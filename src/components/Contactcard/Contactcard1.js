import React from "react";
import "./Contactcard1.css";

function Contactcard1({ imageUrl }) {
  return (
    <div className="contactCard1">
      <div className="contactCard1-container">
        <div className="contactImage1-container">
          <img src={imageUrl} alt="Me" />
        </div>
      </div>
    </div>
  );
}

export default Contactcard1;
