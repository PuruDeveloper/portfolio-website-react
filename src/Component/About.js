import React from "react";
import "./styles/About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-top">
        <h1 className="medium-font">About</h1>
        <br></br>
        <span>
          I was born and brought up in-
          <a
            href="https://www.google.com/maps/place/West+Bengal/@24.3562949,85.6064308,7z/data=!3m1!4b1!4m5!3m4!1s0x39fa16ff1397e887:0x71543a3dc3e7a20a!8m2!3d22.9867569!4d87.8549755"
            target="_blank"
          >
            Kolkata, West Bengal.
          </a>
        </span>
        <br></br>
        <span>
          Currently I am in 6th sem of B.Tech in IT in-
          <a
            href="https://www.google.com/maps/place/Christ+University+Faculty+of+Engineering/@12.8630357,77.4378758,15z/data=!4m2!3m1!1s0x0:0x50103e0cf158813a?sa=X&ved=2ahUKEwj4_Izrj-30AhWT3jgGHcpGB-QQ_BJ6BAg1EAU"
            target="_blank"
          >
            Christ University(Deemed to be University)
          </a>
        </span>
        <br></br>
        <span>
          During my course in college I learned a lot of{" "}
          <a href="#skills">skills</a> outside of college. I also created some{" "}
          <a href="#projects">projects</a> during this time to exercise my
          skills.
        </span>
        <br></br>
        <span>
          I have done an internship at{" "}
          <a href="https://olvy.co/" target="_blank">
            Olvy
          </a>{" "}
          for 1 month from May 2020 to June 2020.
        </span>
      </div>
    </div>
  );
}

export default About;
