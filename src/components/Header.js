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
      <div className="header--2">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
