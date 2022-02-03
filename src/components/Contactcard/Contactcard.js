import React from "react";
import "./Contactcard.css";

function Contactcard({ title, body }) {
  return (
    <div className="contactCard">
      <div className="contactCard-container">
        <div className="contactCard-title">
          <h3>{title}</h3>
          <div className="card-body">
            <p>{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactcard;
