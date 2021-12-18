import React from "react";
import "../styles/pages/Home.css";
import myImage from "../images/purushottam-photo.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-heading">
        <h1>hello, I am </h1>
        <h1>Purushottam</h1>
      </div>
      <div className="home-image">
        <img className="profile-image" src={myImage} alt="My image" />
      </div>
    </div>
  );
}

export default Home;
