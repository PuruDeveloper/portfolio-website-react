import React from "react";
import "./styles/Skills.css";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="medium-font">Skills</h1>
      <br></br>
      <div className="skills-holder">
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">ReactJS</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="skill-num">80%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">JavaScript</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "90%" }}
            ></div>
          </div>
          <div className="skill-num">90%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">Node JS</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "60%" }}
            ></div>
          </div>
          <div className="skill-num">60%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">MongoDB</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "50%" }}
            ></div>
          </div>
          <div className="skill-num">50%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">Express</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "60%" }}
            ></div>
          </div>
          <div className="skill-num">60%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">Java</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "20%" }}
            ></div>
          </div>
          <div className="skill-num">20%</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
