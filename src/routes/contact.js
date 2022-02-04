import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contactcard1 from "../components/Contactcard/Contactcard1";
import Contactcard from "../components/Contactcard/Contactcard";
import "../routes/routes.css";

import IMG_E5617 from "../components/assets/IMG_E5617.JPG";
import IMG_E5615 from "../components/assets/IMG_E5615.JPG";
import IMG_E5616 from "../components/assets/IMG_E5616.JPG";
import background from "../components/assets/natur.jpg";
import background1 from "../components/assets/bakgrund1.jpg";

function Contact() {
  return (
    <div
      style={{
        backgroundImage: `url(${background1})`,
        minWidth: "90vw",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="card">
        <Contactcard
          title="Om mig"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          fuga error quaerat earum, odit veritatis excepturi impedit beatae sint
          aut blanditiis minima consequatur temporibus consequuntur vitae
          explicabo quod, aliquam quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          fuga error quaerat earum, odit veritatis excepturi impedit beatae sint
          aut blanditiis minima consequatur temporibus consequuntur vitae
          explicabo quod, aliquam quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          fuga error quaerat earum, odit veritatis excepturi impedit beatae sint
          aut blanditiis minima consequatur temporibus consequuntur vitae
          explicabo quod, aliquam quos. 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          fuga error quaerat earum, odit veritatis excepturi impedit beatae sint
          aut blanditiis minima consequatur temporibus consequuntur vitae
          explicabo quod, aliquam quos. 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          fuga error quaerat earum, odit veritatis excepturi impedit beatae sint
          aut blanditiis minima consequatur temporibus consequuntur vitae
          explicabo quod, aliquam quos. 

          "
        />
        <Contactcard1 title="Card Title" imageUrl={IMG_E5617} />
        <Contactcard1 title="Card Title" imageUrl={IMG_E5615} />
      </div>
    </div>
  );
}

export default Contact;
