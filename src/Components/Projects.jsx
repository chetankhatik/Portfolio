import React, { useState } from "react";
import "./Projects.css";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "Life Saviour System(L2S)",
      image: "IOT.png",
      technology: "IOT",
      description:
        "L2S system help to save lifes in some critical situation like fire emergency, earthquake, medical emergency,etc through qucik evacuation and intelligent decisions making system.",
    },
    {
      id: 2,
      title: "Data Analytics Web App",
      image: "SR.png",
      technology: "ReactJs & Spring Boot",
      description:
        "This spring boot and ReactJs application stores the data in mysql database and create a api which provide the data from mysql which is used for Data Analysis using Chart & Graphs",
    },
    {
      id: 3,
      title: "Employe Data Spring Api ",
      image: "spring.jpeg",
      technology: "Spring Boot",
      description:
        "This spring boot application stores the data in mysql database and create a api which provide the data from mysql.",
    },
    {
      id: 4,
      title: "Student Management",
      image: "hiber.jpg",
      technology: "Hibernate & SQL",
      description:
        "It helps to manage task related to student data like storing, retrievin, updating, delete, filtering etc.",
    },
    {
      id: 5,
      title: "Employee Management",
      image: "advancejava.jpg",
      technology: "Advance Java(J2EE)",
      description:
        "This J2EE application allows to connect over front end web app through over backend database like mysql and perform CRUD operation using JSP andServlet",
    },
    {
      id: 6,
      title: "Education Roadmap System",
      image: "advance.jpg",
      technology: "Core Java",
      description:
        "It provide the road map for education and help student to get there dream college which is sutaible for there requirements.It also helps to get information about reserve sets.",
    },
  ];

  const openProjectDetails = (projectId) => {
    const selectedProject = projects.find(
      (project) => project.id === projectId
    );
    setSelectedProject(selectedProject);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <h1 id="bouncing-text">Projects</h1>
      <div className="project-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => openProjectDetails(project.id)}
          >
            <img
              className="project-image"
              src={project.image}
              alt={project.title}
            />
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <h3 className="know">Know More</h3>
              <div></div>
            </div>
          </div>
        ))}

        {selectedProject && (
          <div
            className="project-details-overlay"
            onClick={closeProjectDetails}
          >
            <div className="project-details">
              <button className="close-button" onClick={closeProjectDetails}>
                &times;
              </button>
              <img
                className="project-details-image"
                src={selectedProject.image}
                alt={selectedProject.title}
              />
              <div className="project-details-content">
                <h2>{selectedProject.title}</h2>
                <b>
                  <p>Technology: {selectedProject.technology}</p>
                </b>
                <b>
                  {" "}
                  <p>{selectedProject.description}</p>
                </b>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
