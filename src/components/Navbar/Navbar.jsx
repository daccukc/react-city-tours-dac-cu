import React from "react";

/* is the source folder */
import logo from "../../logo.png";
import "./Navbar.scss";

/**
 * Step 3:
 */
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tour logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
