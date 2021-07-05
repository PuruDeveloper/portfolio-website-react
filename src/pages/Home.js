import React from "react";
import olvyLogo from "../images/company/olvy.png";
import "../styles/pages/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home--first display-flex space-around">
        <div className="home--first--text">
          <h1>Hello my friend!</h1>
          <div className="display-flex">
            <h3>I am a </h3>
            <h2> Front End Developer</h2>
          </div>
        </div>
        <div className="home--first--companies">
          <h2>Here are some of the companies I have worked in </h2>
          <div className="company--images display-flex m1">
            <img style={{ width: "250px" }} src={olvyLogo} alt="Olvy Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
