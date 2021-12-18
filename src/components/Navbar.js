import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h2>
          <a href="/">Home</a>
        </h2>
      </div>
      <div>
        <h2>
          <a href="/projects">Projects</a>
        </h2>
      </div>
      <div>
        <h2>
          <a>Skills</a>
        </h2>
      </div>
      <div>
        <h2>
          <a>About</a>
        </h2>
      </div>
      <div>
        <h2>
          <a>Contact</a>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
