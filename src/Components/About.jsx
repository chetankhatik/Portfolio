import React from "react";
import "./About.css"; // Import the CSS file for styling

const AboutMe = () => {
  return (
    <div className="about-me-container" id="about">
      <div className="about-me-content">
        <div className="profile-image-container">
          <img src="./pic2.png" alt="Profile" className="profile-image" />
        </div>
        <div className="text-content">
          <h2>
            About <span>Me</span>
          </h2>
          <b>
            <p>
              Hello! I'm Chetan Kishan Khatik, a passionate and creative web
              developer with a strong foundation in front-end and back-end
              technologies. I love turning ideas into reality through code and
              creating engaging, user-friendly experiences.
            </p>
            <p>
              Proficient in <span>Java</span>, <span>Advance java</span>,
              <span> Spring Boot</span>, <span>ReactJs</span>, and more. Eager
              to solve complex problems and deliver seamless user experiences.
            </p>
          </b>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
