import React from "react";
import "../styles/pages/Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-container">
        <div className="skill-collection">
          <div className="skill-card">
            <i class="fab fa-html5 fa-7x"></i>
            <h2 className="skill-name">HTML5</h2>
          </div>
          <div className="skill-card">
            <i class="fab fa-js-square fa-7x"></i>
            <h2 className="skill-name">Javascript</h2>
          </div>
        </div>
        <div className="skill-collection">
          <div className="skill-card">
            <i class="fab fa-css3-alt fa-7x"></i>
            <h2 className="skill-name">CSS</h2>
          </div>
          <div className="skill-card">
            <i class="fab fa-react fa-7x"></i>
            <h2 className="skill-name">React Js</h2>
          </div>{" "}
        </div>
        <div className="skill-collection">
          <div className="skill-card">
            <i class="fab fa-node fa-7x"></i>
            <h2 className="skill-name">Node Js</h2>
          </div>
          <div className="skill-card">
            <i class="fas fa-database fa-7x"></i>
            <h2 className="skill-name">Mongo Db</h2>
          </div>
        </div>
        <div className="skill-collection">
          <div className="skill-card">
            <i class="fab fa-github fa-7x"></i>
            <h2 className="skill-name">Git</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
