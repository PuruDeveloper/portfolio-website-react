import React from "react";
import auctionimage from "./bidding-website-image.png";
import frontendimage from "./front-end-test-image.png";
import "../styles/pages/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div class="project">
        <h3>
          <a href="https://ibid-purushottam.web.app/" target="_blank">
            Bidding Website
          </a>
        </h3>
        <img src={auctionimage} alt="auction-website-image" />
      </div>
      <div class="project">
        <h3>
          <a href="https://frontend-test-12.herokuapp.com/" target="_blank">
            Frontend-test-page
          </a>
        </h3>
        <img src={frontendimage} alt="front-test-image" />
      </div>
    </div>
  );
}

export default Projects;
