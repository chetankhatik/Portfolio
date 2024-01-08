import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    { skill: "Core Java", percentage: 100, image: "./java.png" },
    { skill: "J2EE", percentage: 100, image: "./j2ee.jpg" },
    { skill: "Hibernate", percentage: 70, image: "./hiber.png" },
    { skill: "Spring Boot", percentage: 85, image: "./spring.png" },
    { skill: "SQL", percentage: 90, image: "database.png" },
    { skill: "HTML", percentage: 100, image: "html-5.png" },
    { skill: "CSS", percentage: 90, image: "css-3.png" },
    { skill: "JavaScript", percentage: 80, image: "java-script.png" },
    { skill: "ReactJs", percentage: 70, image: "React.png" },
  ];

  return (
    <div>
      <h1 className="skills-title" id="bouncing-text">
        Skills
      </h1>
      <div className="skills-container">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-item">
            <div className="progress-container">
              <CircularProgressbar
                value={item.percentage}
                styles={{
                  root: { width: "100px" },
                  path: {
                    stroke: `rgba(62, 152, 199, ${item.percentage / 100})`,
                  },
                  text: { fill: "#333", fontSize: "25px" },
                }}
              />
              <img
                className="skill-image"
                src={item.image}
                alt={`${item.skill}`}
              />
            </div>
            <div className="skill-label">{item.skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
