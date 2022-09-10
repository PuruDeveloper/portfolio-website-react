import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "./styles/Home.css";
import leetcodeImage from "../images/socials/leetcode.jpg";
import githubImage from "../images/socials/github.jpg";
import codechefImage from "../images/socials/codechef.jpg";
import linkedinImage from "../images/socials/linkedin.jpg";
import hackerrankImage from "../images/socials/hackerrank.jpg";
import myImage from "../images/myImage.jpg";
import github from "../images/accounts/github.png";
import leetcode from "../images/accounts/leetcode.png";
import linkedin from "../images/accounts/linkedin.png";
import codechef from "../images/accounts/codechef.png";
import hackerrank from "../images/accounts/hackerrank.png";
import codeforces from "../images/accounts/codeforces.png";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-top">
        <h1>PM</h1>
        <br></br>
        <a href="https://github.com/PuruDeveloper" target="_blank">
          <button title="Github" className="social-logo">
            <i className="fa-brands fa-github"></i>
          </button>
        </a>
        <a href="https://leetcode.com/PMstrikes/" target="_blank">
          <button title="Leetcode" className="social-logo fa-leetcode">
            <i>Le</i>
          </button>
        </a>

        <a href="https://www.hackerrank.com/mpurushottam27" target="_blank">
          <button title="Hackerrank" className="social-logo">
            <i className="fa-brands fa-hackerrank"></i>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/purushottam-mishra-074383191/"
          target="_blank"
        >
          <button title="LinkedIn" className="social-logo">
            <i className="fa-brands fa-linkedin-in"></i>
          </button>
        </a>
      </div>

      <div className="home-body">
        <div className="home-about">
          <div className="big-font">
            <h1>Hello</h1>
            <h1>I'm Purushottam</h1>
            <h1>Mishra</h1>
            <br></br>
          </div>
          <h2 className="title">
            <span className="quote-1">I am a Full Stack Engineer</span>
            <br></br>
            <span className="quote-2">Developer</span>
            <br></br>
            <span className="quote-3">Software Engineer</span>
            <br></br>

            <span className="quote-4">Student</span>
          </h2>
          <br></br>
          <div className="home-button">
            <a
              href="https://drive.google.com/drive/folders/1kkt47qCc52oG_ci8i8l-Q9dTbFHahFpN?usp=sharing"
              target="_blank"
            >
              <button>My CV</button>
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src={myImage} alt="" className="image-profile"></img>
        </div>
      </div>
      <div className="home-container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <a href="https://github.com/PuruDeveloper" target="_blank">
              <img src={github}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://leetcode.com/PMstrikes/" target="_blank">
              <img src={leetcode}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.linkedin.com/in/purushottam-mishra-074383191/"
              target="_blank"
            >
              <img src={linkedin}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.codechef.com/users/pm_strikes_123"
              target="_blank"
            >
              <img src={codechef}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.hackerrank.com/mpurushottam27" target="_blank">
              <img src={hackerrank}></img>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://codeforces.com/profile/PMStrikes" target="_blank">
              <img src={codeforces}></img>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
