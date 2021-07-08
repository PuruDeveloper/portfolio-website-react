import React from "react";
import olvyLogo from "../images/company/olvy.png";
import "../styles/pages/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home--first  space-around">
        <div className="home--first--text">
          <h1>Hello my friend!</h1>
          <div className="display-flex">
            <h2>I am a Front End Developer</h2>
          </div>
          <div>
            <h2>
              Currently I am trying to learn all the new tools that I can.
            </h2>
          </div>
        </div>
        <div className="home--first--companies">
          <h1>Work Experience</h1>
          <div className="company--images display-flex m1">
            <div>
              <a href="https://olvy.co/" alt="Olvy.co">
                <img
                  style={{ width: "200px" }}
                  src={olvyLogo}
                  alt="Olvy Logo"
                />
              </a>

              <div className="work--details">
                <p>* Internship</p>
                <p>* React and Vue Developer</p>
                <p>* 10 May 2021 - 18 July 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home--second">
        <h1>All I have learned over the years</h1>
        <div className="learnings">
          <div>
            <i class="fab fa-html5"></i>
          </div>
          <div>HTML & CSS</div>
        </div>
        <div>
          <div>
            <i class="fab fa-react"></i>
          </div>
          <div>ReactJs</div>
        </div>
        <div>
          <div>
            <i class="fab fa-js"></i>
          </div>
          <div>JavaScript</div>
        </div>
        <div>
          <div>
            <i class="fab fa-github-square"></i>
          </div>
          <div>Github</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
