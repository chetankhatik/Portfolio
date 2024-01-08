import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Form.css"; // You can create a CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to the server)
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h1 id="bouncing-text">Contact Me</h1>
      <div className="contact-form-container">
        <div className="logoright">
          <div className="social-logos1">
            <a
              href="tel:+199373744595"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPhone} className="icon1" />
              &nbsp;&nbsp;&nbsp;&nbsp; <span> +91 9373744595</span>
            </a>
            <br />
            <br />
            <a
              href="mailto:khatikck07@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon2" />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;<span> khatikck07@gmail.com</span>
            </a>
            <br />
            <br />
            <a
              href="https://www.linkedin.com/in/chetan-khatik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="linkedIn-icon icon"
              />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>www.linkedin.com/in/chetan-khatik</span>
            </a>
            <br />
            <br />
            <a
              href="https://github.com/chetankhatik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="github-icon" />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>github.com/chetankhatik</span>
            </a>
            <br />
            <br />
            <a
              href="https://wa.me/9373744595"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
              &nbsp;&nbsp;&nbsp;&nbsp;<span> 9373744595</span>
            </a>
            <br />
            <br />
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;<span>beast_ck</span>
            </a>
            <br />
          </div>
        </div>

        <br />

        <div className="social-logos2">
          <h2 className="sendmessage">Send Message To Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Messgae"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
