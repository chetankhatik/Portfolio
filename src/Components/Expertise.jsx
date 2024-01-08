import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Expertise.css"; // You can create this CSS file for additional styling

const expertiseData = [
  {
    title: "Java Full Stack Development",
    description:
      "Building bridges between front-end elegance and back-end robustness. Let's code the future together! 💻✨ #FullStackDev",
    image: "FS.jpg",
  },
  {
    title: "Web-Technologies",
    description:
      "Transforming ideas into interactive web experiences. Crafting the digital journey with lines of code. 💻✨ #WebDeveloper",
    image: "Web.jpg",
  },
  {
    title: "Java Development",
    description:
      "Architecting the brains behind the scenes. From databases to server logic, making things work seamlessly. 💻🚀 #BackendDeveloper",
    image: "java.jpg",
  },
];

const Expertise = () => {
    return (
      <div className="expertise-container">
        <h2 className="Extext" id="bouncing-text">
          Expertise
        </h2>
        <Carousel interval={2000}>
          {expertiseData.map((expertise, index) => (
            <Carousel.Item key={index}>
              <img
                className="expertise-image d-block w-100"
                src={expertise.image}
                alt={expertise.title}
              />
              <Carousel.Caption className="carousel-caption">
                <h3>{expertise.title}</h3>
                <p>{expertise.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
};

export default Expertise;
