import "./navbar.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

// Navbar component
function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            to="/"
            id="home"
            className={location.pathname === "/" ? "active" : ""}
          >
            {location.pathname === "/" ? "►Home" : "Home"}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            id="about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            {location.pathname === "/about" ? "►About" : "About"}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            id="contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            {location.pathname === "/contact" ? "►Contact" : "Contact"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
