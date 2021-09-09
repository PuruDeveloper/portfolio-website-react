import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <h3>
          <a href="/">DEV PORTFOLIO</a>
        </h3>
      </div>
      <div class="contact">
        <h4>Contact Us</h4>
        <p>mpurushottam27@gmail.com</p>
        <a
          href="https://github.com/PuruDeveloper"
          target="_blank"
          alt="Github Link"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/purushottam-mishra-074383191/"
          target="_blank"
          alt="LinkedIn Link"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/purustayshere/"
          target="_blank"
          alt="Instagram Link"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <div>
        <Link to="/about">
          <h4>About Me</h4>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
