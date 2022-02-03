import React from "react";
/* import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; */
import { Outlet } from "react-router-dom";
import "./App.css";
/* import { Link } from "react-router-dom"; */
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
