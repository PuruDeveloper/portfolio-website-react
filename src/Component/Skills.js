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
              style={{ width: "65%" }}
            ></div>
          </div>
          <div className="skill-num">65%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">Vue.js</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "30%" }}
            ></div>
          </div>
          <div className="skill-num">30%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">JavaScript</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "48%" }}
            ></div>
          </div>
          <div className="skill-num">48%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">Node JS</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="skill-num">45%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">MongoDB</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "42%" }}
            ></div>
          </div>
          <div className="skill-num">42%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">Express</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "38%" }}
            ></div>
          </div>
          <div className="skill-num">38%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">Java</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "23%" }}
            ></div>
          </div>
          <div className="skill-num">23%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">Redux</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "30%" }}
            ></div>
          </div>
          <div className="skill-num">30%</div>
        </div>
        <div className="skill-holder">
          <div className="skill">
            <div className="skill-text">Problem Solving</div>
            <div
              className="skill-fill animation-done"
              style={{ width: "50%" }}
            ></div>
          </div>
          <div className="skill-num">50%</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
