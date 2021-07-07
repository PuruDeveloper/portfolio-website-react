import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../styles/components/Header.css";

function Header() {
  return (
    <div className="header">
      <h2 className="header--1">
        <Link to="/">DEV PORTFOLIO</Link>
      </h2>
      <div className="contact--links">
        <a
          href="https://github.com/PuruDeveloper"
          target="blank"
          alt="Github Link"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/purushottam-mishra-074383191/"
          target="blank"
          alt="LinkedIn Link"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/purustayshere/"
          target="blank"
          alt="Instagram Link"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <div className="header--2">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
