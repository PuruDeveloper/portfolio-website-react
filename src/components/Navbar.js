import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="navbar--item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navbar--item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
