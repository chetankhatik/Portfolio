import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

import SentencePrinter from "./SentencePrinter";

const HomeData = () => {
  const sentencesArray = [
    "Java Full Stack Developer",
    "FrontEnd Developer",
    "BackEnd Developer",
  ];

  return (
    <Container fluid className="container-fluid">
      <div className="main-container">
        <div className="left-section">
          <div className="textcontent">
            <h1>Hi There,</h1>
            <h1>I'm Chetan Khatik</h1>
            <h2>
              <SentencePrinter sentences={sentencesArray} />
            </h2>
          </div>

          <div className="social-links">
            <a
              href="mailto:khatikck07@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faEnvelope} className="icon2 icon2 " />
            </a>
            <a
              href="https://www.linkedin.com/in/chetan-khatik"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FontAwesomeIcon
                icon={faLinkedin}
                className="linkedIn-icon icon2"
              />
            </a>
            <a
              href="https://github.com/chetankhatik"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faGithub} className="github-icon icon2 " />
            </a>
          </div>
        </div>

        <div className="right-section">
          <img src="Profile.png" alt="MyPhoto" className="profile-photo" />
        </div>
      </div>
    </Container>
  );
};

export default HomeData;
