import React from "react";
import "./styles/Home.css";
import myImage from "../images/purushottam-photo.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-top">
        <h1>PM</h1>
      </div>

      <div className="home-body">
        <div className="home-about">
          <div className="big-font">
            <h1>Hello</h1>
            <h1>I'm Purushottam</h1>
            <h1>Mishra</h1>
            <br></br>
          </div>
          <span>A full stack engineer</span>
          <br />
          <span>that is exactly whay u need</span>
          <br></br>
          <div className="home-button">
            <button> DOWNLOAD CV</button>
          </div>
        </div>
        <div className="home-image">
          <img src={myImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
