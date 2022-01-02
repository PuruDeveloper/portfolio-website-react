import React from "react";
import "../styles/pages/Projects.css";
import project1 from "../images/projects/project-1.png";
import project2 from "../images/projects/project-2.png";
import project3 from "../images/projects/project-3.png";
import project4 from "../images/projects/project-4.png";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-heading">Some of my projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <img className="project-img" src={project1} alt="Project 1" />
          <div className="project-right">
            <div className="project-content">
              <h1 className="project-title">Project 1: Backend</h1>
              <p className="project-info">
                It is a basic chat application where any random user can come
                and create a chat room or join an already created chat room.
              </p>
            </div>
            <div className="project-btn">
              <a
                href="https://github.com/PuruDeveloper/node-chat-app"
                target="_blank"
              >
                <button>Github Repo</button>
              </a>

              <a href="http://puruchatapp.herokuapp.com/" target="_blank">
                <button>See Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img className="project-img" src={project2} alt="Project 2" />
          <div className="project-right">
            <div className="project-content">
              <h1 className="project-title">Project 2: Frontend Only</h1>
              <p className="project-info">
                It is a basic clone of an auction application. I had to make it
                for a test for my internship application.
              </p>
            </div>
            <div className="project-btn">
              <a
                href="https://github.com/PuruDeveloper/react-ibid-demo-app"
                target="_blank"
              >
                <button>Github Repo</button>
              </a>

              <a href="https://ibid-purushottam.web.app/" target="_blank">
                <button>See Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img className="project-img" src={project3} alt="Project 3" />
          <div className="project-right">
            <div className="project-content">
              <h1 className="project-title">Project 3: Frontend Only</h1>
              <p className="project-info">
                This is a simple one page that I made to test my frontend
                skills. It has no other reason to be here in this list.
              </p>
            </div>
            <div className="project-btn">
              <a
                href="https://github.com/PuruDeveloper/frontend-test"
                target="_blank"
              >
                <button>Github Repo</button>
              </a>

              <a href="https://frontend-test-12.herokuapp.com/" target="_blank">
                <button>See Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img className="project-img" src={project4} alt="Project 4" />
          <div className="project-right">
            <div className="project-content">
              <h1 className="project-title">Project 4: Full Stack</h1>
              <p className="project-info">
                This is a sample to showcase my backend skills. It is created
                with Node.js, Express, MongoDB in the backend. I have used React
                in frontend. User can select date range and the chart
                dynamically updates based on the search made by the user.
              </p>
            </div>
            <div className="project-btn">
              <a
                href="https://github.com/PuruDeveloper/fruit-vegetable"
                target="_blank"
              >
                <button>Github Repo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
