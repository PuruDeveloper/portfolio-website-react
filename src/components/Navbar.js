import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <p className="navbar--item">
        <Link to="/projects">Projects</Link>
      </p>
      <p className="navbar--item">
        <Link to="/resources">Resources</Link>
      </p>
      <p className="navbar--item">
        <Link to="/about">About</Link>
      </p>
    </div>
  );
}

export default Navbar;
