import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>GoWeather</h2>
          <p>Your daily weather companion</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: rehman.dev@gmal.com</p>
          <p>Phone: </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 GoWeather. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
