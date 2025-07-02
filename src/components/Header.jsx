import React from 'react';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="logo">GoWeather</div>
      <div className="welcome-text">
        <p>Welcome to GoWeather</p>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

