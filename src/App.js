import React, { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./component/gallery/gallery";
import ContactUs from "./component/contactUs/contactUs";
import Home from "./component/home/home";
import About from "./component/about/about";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav style={{ textAlign: "right", paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: "peachpuff" }}>
        <Link to="/home">
          <span style={{ marginRight: "5rem" }}>Home</span>
        </Link>
        <Link to="/about">
          <span style={{ marginRight: "5rem" }}>About</span>
        </Link>
        <Link to="/gallery">
          <span style={{ marginRight: "5rem" }}>Gallery</span>
        </Link>
        <Link to="/contactus">
          <span style={{ marginRight: "5rem" }}>Contact Us</span>
        </Link>
      </nav>

      <Routes>
        <Route exact path="/" element={<div>Dashboard</div>} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contactus" element={<ContactUs />} />
      </Routes>
      {/* <Home />
      <Gallery />
      <About />
      <ContactUs /> */}
    </div>
  );
}

export default App;
