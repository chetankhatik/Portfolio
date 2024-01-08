import React from "react";
import "./Skills.css";

const technicalSkills = [
  { name: "Core Java", image: "./java.png" },
  { name: "J2EE", image: "./j2ee.jpg" },
  { name: "Hibernate", image: "./hiber.png" },
  { name: "Spring Boot", image: "./spring.png" },
  { name: "SQL", image: "database.png" },
  { name: "HTML", image: "html-5.png" },
  { name: "CSS", image: "css-3.png" },
  { name: "JavaScript", image: "java-script.png" },
  { name: "jQuery", image: "jq.png" },
  { name: "Bootstrap", image: "bootstrap.png" },
  { name: "ReactJs", image: "React.png" },
];



const Skillsdata = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 id="bouncing-text">Skills</h2>

      <div className="skills-list">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={`${skill.name} Logo`} />
            <b>
              <p>{skill.name}</p>
            </b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillsdata;
