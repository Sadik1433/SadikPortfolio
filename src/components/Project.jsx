import "./CssFile/project.css";
import profile from "./assets/avatar.png";

import { projectData } from "../data/data.jsx";


const aosAnimations = ["fade-right", "fade-left"];

const Project = () => {
  return (
    <section id="project" className="project-section">
      <div className="project-para-container" data-aos="fade-down">
        <h1 className="project-header">Projects</h1>
        <p className="project-para">
          A showcase of interactive and responsive web applications built using
          React, JavaScript, and modern UI practices. These projects reflect my
          ability to build clean interfaces and dynamic user experiences.
        </p>
      </div>
      <ul className="projects-grid">
        {projectData.map((project, index) => (
          <li
            className="project-card"
            key={index}
            data-aos={aosAnimations[index % aosAnimations.length]}
            data-aos-delay={index * 100}
            style={{
              backgroundImage: `url(${profile})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "250px",
              width: "100%",
              borderRadius: "12px",
            }}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                <span>{project.languages[0]}</span>
                <span>{project.languages[1]}</span>
                <span>{project.languages[2]}</span>
              </div>

              <div className="project-actions">
                <a href={project.liveDemo} className="btn primary">
                  Live Demo
                </a>
                <a href="" className="btn outline">
                  GitHub
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
