import React from 'react';
import "../styles/Header.css"; // Import CSS file for header styles

function Header() {
  return (
    <header>
    <img src={require("../assets/Maryam/lighting-header.jpg")} alt="Header"/>
      <h1>Contact Us</h1>
    </header>
  );
}

export default Header;
