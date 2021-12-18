import React from "react";
import "../styles/pages/Projects.css";
import project1 from "../images/projects/project-1.png";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-heading">Some of my projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <img className="project-img" src={project1} alt="Project 1" />
          <div>
            <div className="project-content">
              <h1 className="project-title">Project 1</h1>
              <p className="project-info">lorem uabd</p>
            </div>
            <div className="project-btn">
              <a href="" target="_blank">
                <button>Github Repo</button>
              </a>

              <a href="http://puruchatapp.herokuapp.com/" target="_blank">
                <button>See Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img className="project-img" src={project1} alt="Project 1" />
          <div>
            <div className="project-content">
              <h1 className="project-title">Project 2</h1>
              <p className="project-info">lorem uabd</p>
            </div>
            <div className="project-btn">
              <a href="" target="_blank">
                <button>Github Repo</button>
              </a>

              <a href="http://puruchatapp.herokuapp.com/" target="_blank">
                <button>See Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img className="project-img" src={project1} alt="Project 1" />
          <div>
            <div className="project-content">
              <h1 className="project-title">Project 3</h1>
              <p className="project-info">lorem uabd</p>
            </div>
            <div className="project-btn">
              <a href="" target="_blank">
                <button>Github Repo</button>
              </a>

              <a href="http://puruchatapp.herokuapp.com/" target="_blank">
                <button>See Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
