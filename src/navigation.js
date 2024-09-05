/* eslint-disable no-unused-vars */
import React from "react";
import './navigation.css'; // Import the CSS file for styling

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-links">
        <span><a href="#home">Home</a></span>
        <span><a href="#about">About Us</a></span>
        <span><a href="#services">Services</a></span>
      </div>
      <div className="nav-search">
        <input type="search" placeholder="Search here" />
        <button>Go</button>
      </div>
    </nav>
  );
}

export default Navigation;
