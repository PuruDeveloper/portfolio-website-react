import React from "react";
import "./styles/Experience.css";

function Experience() {
  return (
    <div className="experience" id="experience">
      <h1 className="medium-font">Experience</h1>
      <br></br>
      <table>
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Duration</th>
        </tr>
        <tr>
          <td>Olvy</td>
          <td>Frontend Engineer</td>
          <td>May 2021- June 2021</td>
        </tr>
      </table>
    </div>
  );
}

export default Experience;
