import "./CssFile/project.css";
import profile from "./assets/avatar.png";

const projectData = [
  {
    id: 1,
    title: "Tic-Tac-Toe",
    description: "Practice DOM manipulation and game logic.",
    languages: ["HTML", "CSS", "JavaScript"],
    gitHub: "#",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Showcase your projects and skills with a personal website.",
    languages: ["HTML", "CSS", "JavaScript"],
    gitHub: "#",
    liveDemo: "https://sadikportfolio.netlify.app/",
  },
  {
    id: 3,
    title: "EmojiGame",
    description: "Learn array manipulation and dynamic rendering.",
    languages: ["HTML", "CSS", "JavaScript"],
    gitHub: "#",
    liveDemo: "#",
  },
  {
    id: 4,
    title: "Job Search",
    description: "Build a responsive layout mimicking real-world apps.",
    languages: ["HTML", "CSS", "JavaScript"],
    gitHub: "#",
    liveDemo: "#",
  },
  {
    id: 5,
    title: "Todolist",
    description: "Understand data persistence and user interaction.",
    languages: ["HTML", "CSS", "JavaScript"],
    gitHub: "#",
    liveDemo: "#",
  },
];


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
