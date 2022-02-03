import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./routes.css";
import Card from "../components/Card/Card";
import background1 from "../components/assets/bakgrund1.jpg";

function Projects() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background1})`,
          width: "100vw",
          height: "85vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>These are my projects </h1>

        <Card
          title="Card Title"
          imageUrl="https://googlechrome.github.io/samples/picture-element/images/kitten-small.png"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          fuga error quaerat earum, odit veritatis excepturi impedit beatae sint
          aut blanditiis minima consequatur temporibus consequuntur vitae
          explicabo quod, aliquam quos."
        />
        <Card
          title="Card Title"
          imageUrl="https://googlechrome.github.io/samples/picture-element/images/kitten-small.png"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          fuga error quaerat earum, odit veritatis excepturi impedit beatae sint
          aut blanditiis minima consequatur temporibus consequuntur vitae
          explicabo quod, aliquam quos."
        />
        <Card
          title="Card Title"
          imageUrl="https://googlechrome.github.io/samples/picture-element/images/kitten-small.png"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          fuga error quaerat earum, odit veritatis excepturi impedit beatae sint
          aut blanditiis minima consequatur temporibus consequuntur vitae
          explicabo quod, aliquam quos."
        />
      </div>
    </div>
  );
}

/* class Projects extends Component {
  render() {
    const myStyle = {
      src: { background1 }, 
      backgroundImage: "url('../components/assets/bakgrund1.jpg')", 
      backgroundImage: { background1 },
      width: "100vw",
      height: "100vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div>
          <div style={{ backgroundImage: `url(${background1})` }}></div>
        <div style={myStyle}>
          <h1>These are my projects </h1>
          <br></br>
          <br></br>
          <div>
            <Card
              title="Card Title"
              imageUrl="https://googlechrome.github.io/samples/picture-element/images/kitten-small.png"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            fuga error quaerat earum, odit veritatis excepturi impedit beatae sint
            aut blanditiis minima consequatur temporibus consequuntur vitae
            explicabo quod, aliquam quos."
            />
            <Card
              title="Card Title"
              imageUrl="https://googlechrome.github.io/samples/picture-element/images/kitten-small.png"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            fuga error quaerat earum, odit veritatis excepturi impedit beatae sint
            aut blanditiis minima consequatur temporibus consequuntur vitae
            explicabo quod, aliquam quos."
            />
            <Card
              title="Card Title"
              imageUrl="https://googlechrome.github.io/samples/picture-element/images/kitten-small.png"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            fuga error quaerat earum, odit veritatis excepturi impedit beatae sint
            aut blanditiis minima consequatur temporibus consequuntur vitae
            explicabo quod, aliquam quos."
            />
          </div>
        </div>
      </div>
    );
  }
} */

export default Projects;
