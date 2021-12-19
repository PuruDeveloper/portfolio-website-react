import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState();
  const changeMenu = (e) => {
    e.preventDefault();
    if (showMenu === undefined || showMenu === false) {
      setShowMenu(true);
    } else {
      setShowMenu(!showMenu);
    }
  };
  return (
    <div className="navbar">
      <div
        className={
          showMenu === undefined || showMenu === false ? "showMenu" : "hideMenu"
        }
      >
        <button onClick={(e) => changeMenu(e)}>
          <i class="fas fa-bars fa-2x"></i>
        </button>
      </div>

      <div className={showMenu === true ? "showMenu" : "hideMenu"}>
        <button onClick={(e) => changeMenu(e)}>
          <i class="fas fa-times fa-2x"></i>
        </button>
      </div>

      <div className={showMenu === true ? "menu showMenu " : "hideMenu"}>
        <h2>
          <a href="/">Home</a>
        </h2>
      </div>
      <div className={showMenu === true ? "menu showMenu" : "hideMenu"}>
        <h2>
          <a href="/projects">Projects</a>
        </h2>
      </div>
      <div className={showMenu === true ? "menu showMenu" : "hideMenu"}>
        <h2>
          <a href="/skills">Skills</a>
        </h2>
      </div>
      <div className={showMenu === true ? "menu showMenu" : "hideMenu"}>
        <h2>
          <a href="/about">About</a>
        </h2>
      </div>
      <div className={showMenu === true ? "menu showMenu" : "hideMenu"}>
        <h2>
          <a href="/contact">Contact</a>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
