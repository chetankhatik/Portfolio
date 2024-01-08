import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center p-3">
      <div className="container">
        <p>© All Right Reserved 2023 </p>
      </div>

      <div className="social-logosx">
        <a href="tel:+199373744595" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPhone} className="icon1 iconx" />
        </a>
        <br />
        <br />
        <a
          href="mailto:khatikck07@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon2 iconx" />
        </a>
        <br />
        <br />
        <a
          href="https://www.linkedin.com/in/chetan-khatik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="linkedIn-icon iconx" />
        </a>
        <br />
        <br />
        <a
          href="https://github.com/chetankhatik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="github-icon iconx" />
        </a>
        <br />
        <br />
        <a
          href="https://wa.me/9373744595"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon iconx" />
        </a>
        <br />
        <br />
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="instagram-icon iconx"
          />
        </a>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
