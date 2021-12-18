import React from "react";
import AboutPhoto from "../images/purushottam-photo-2.jpg";
import "../styles/pages/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-info">
        <h1>About Me</h1>
        <br></br>
        <h3>
          I was born and brought up in
          <a
            href="https://www.google.com/maps/place/West+Bengal/@24.3562949,85.6064308,7z/data=!3m1!4b1!4m5!3m4!1s0x39fa16ff1397e887:0x71543a3dc3e7a20a!8m2!3d22.9867569!4d87.8549755"
            target="_blank"
          >
            Kolkata, West Bengal.
          </a>
        </h3>
        <br></br>
        <h4>
          I did my 10th from ICSE and 12th from ISC board from St.Joan's School.
        </h4>
        <br></br>
        <h3>
          Then I gave multiple engineering entrance exams and ended up in{" "}
          <a
            href="https://www.google.com/maps/place/Christ+University+Faculty+of+Engineering/@12.8630357,77.4378758,15z/data=!4m2!3m1!1s0x0:0x50103e0cf158813a?sa=X&ved=2ahUKEwj4_Izrj-30AhWT3jgGHcpGB-QQ_BJ6BAg1EAU"
            target="_blank"
          >
            Christ University(Deemed to be University)
          </a>
        </h3>
        <br></br>
        <h2>
          During my course in college I learned a lot of{" "}
          <a href="/skills">skills</a> outside of college. I also created some{" "}
          <a href="/projects">projects</a> during this time to exercise my
          skills.
        </h2>
        <br></br>
        <h3>
          I have done an internship at{" "}
          <a href="https://olvy.co/" target="_blank">
            Olvy
          </a>{" "}
          for 1 month from May 2020 to June 2020.
        </h3>
      </div>
      <div className="about-image">
        <img src={AboutPhoto} alt="About image" />
      </div>
    </div>
  );
}

export default About;
