import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./routes.css";
import background1 from "../components/assets/bakgrund1.jpg";
import pic1 from "../components/assets/pic1.png";
import Catcard from "../components/Catcard/Catcard";

function Home() {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url(${background1})`,
            minWidth: "90vw",
            minHeight: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 style={{ fontSize: "5rem", color: "white" }}>
            Welcome to my site!
          </h1>
          <h2 style={{ fontSize: "2rem", color: "white" }}>
            Here you can check out my projects, look at photos of my cat, or
            check out my links in the footer.
          </h2>

          <div style={{ left: "45%", position: "absolute" }}>
            <Catcard title="Card Title" imageUrl={pic1} />

            <h3 style={{ fontSize: "1rem", color: "white" }}>
              This is me, Frank Asplund
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
