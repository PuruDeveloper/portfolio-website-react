import React from "react";
import "./styles/Experience.css";

function Experience() {
  return (
    <div className="experience" id="experience">
      <h1 className="medium-font">Experience</h1>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Epsilon India</td>
            <td>Software Engineer</td>
            <td>Jun 2022- Jul 2022</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Olvy</td>
            <td>Frontend Engineer</td>
            <td>May 2021- Jun 2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Experience;
