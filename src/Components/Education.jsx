import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Information Technology",
      school: "University of Mumbai",
      year: "2020 - 2023",
    },
    {
      id: 2,
      degree: "High School Diploma",
      school: "M.K Junior College ",
      year: "2018- 2020",
    },
    {
      id: 3,
      degree: "SSC",
      school: "C.T.E.S English Medium School ",
      year: "2018",
    },
  ];

  const Course = [
    {
      id: 1,
      name: "Java Full Stack Development",
      Institute: "Jspiders",
      year: 2023,
    },
    {
      id: 2,
      name: "Msc-IT",
      Institute: "ZCA Academy ",
      year: 2018,
    },
    {
      id: 3,
      name: "Office Automation & PC Maintenance",
      Institute: "ZCA Academy ",
      year: 2018,
    },
  ];

  return (
    <div>
      <h1 id="bouncing-text">Academics </h1>
      <div className="Outeredu">
        <div className="education-container">
          <h2 className="section-title">
            <FaGraduationCap /> Education
          </h2>
          <div className="education-list">
            {educationData.map((edu) => (
              <div key={edu.id} className="education-item">
                <div className="education-info">
                  <h3 className="degree">{edu.degree}</h3>
                  <p className="school">
                    <FaSchool /> {edu.school}
                  </p>
                  <p className="year">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-container">
          <h2 className="section-title">
            <FaGraduationCap /> Courses
          </h2>
          <div className="education-list">
            {Course.map((edu) => (
              <div key={edu.id} className="education-item">
                <div className="education-info">
                  <h3 className="degree">{edu.name}</h3>
                  <p className="school">
                    <FaSchool /> {edu.Institute}
                  </p>
                  <p className="year">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
