import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./routes.css";
import Card from "../components/Card/Card";
import background1 from "../components/assets/bakgrund1.jpg";

import bollHome from "../components/assets/bollHome.JPG";
import CVSkaparenIndex from "../components/assets/CVSkaparenIndex.JPG";
import teamAIndex from "../components/assets/teamAIndex.JPG";

function Projects() {
  return (
    <div className="backgroundpic">
      <div>
        <h1 style={{ color: "white", padding: "2rem" }}>
          Här är ett par av mina projekt
        </h1>

        <Card
          title="Boll.se"
          imageUrl={bollHome}
          body="Gruppuppgift för java. Mycket Javascript, en del HTML och självklart responsiv CSS. 
          Single-page application."
          link="https://github.com/FrankAsplund/JS2Grupp9"
        />
        <Card
          title="CV-skaparen.se"
          imageUrl={CVSkaparenIndex}
          body="Individuell uppgift för HTML och CSS. Består av en del Javascript, samt HTML och CSS."
        />
        <Card
          title="TeamA.se"
          imageUrl={teamAIndex}
          body="Gruppuppgift för Arbetsmetodik 2. Består av mycket Javascript, HTML och CSS."
        />
      </div>
    </div>
  );
}

export default Projects;
