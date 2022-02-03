import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./routes.css";
import Catcard from "../components/Catcard/Catcard";
import IMG_8089 from "../components/assets/IMG_8089.jpg";
import IMG_7989 from "../components/assets/IMG_7989.jpg";
import IMG_8053 from "../components/assets/IMG_8053.jpg";
import IMG_8247 from "../components/assets/IMG_8247.jpg";
import IMG_8062 from "../components/assets/IMG_8062.jpg";
import background1 from "../components/assets/bakgrund1.jpg";
import Contactcard from "../components/Contactcard/Contactcard";

function About() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background1})`,
          width: "auto",
          height: "auto",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Contactcard
          title="Card Title"
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
        <Catcard title="Card Title" imageUrl={IMG_8089} />
        <Catcard title="Card Title" imageUrl={IMG_7989} />
        <Catcard title="Card Title" imageUrl={IMG_8053} />
        <Catcard title="Card Title" imageUrl={IMG_8247} />
        <Catcard title="Card Title" imageUrl={IMG_8062} />
      </div>
    </div>
  );
}

export default About;
