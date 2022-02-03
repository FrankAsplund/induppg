import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logga from "../assets/logga.png";

function homeBtn() {
  console.log("Hej");
}

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to={MenuItems[0]}></Link>

        <h1 className="navbar-logo" onClick={homeBtn}>
          Frank Asplund
        </h1>
        <img
          src={logga}
          style={{ height: 70, width: 200, margin: 10, cursor: "pointer" }}
          onClick={homeBtn}
        />
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
