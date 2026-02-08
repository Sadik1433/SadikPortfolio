import "./CssFile/skill.css";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const aosAnimations = ["fade-right", "fade-left"];

const skills = [
  {
    title: "Java",
    icon: <FaJava size={30} />,
    description:
      "Strong OOP concepts, data structures, and backend development using Java.",
  },
  {
    title: "Python",
    icon: <FaPython size={30} />,
    description:
      "Experienced in scripting, automation, and data handling with Python.",
  },
  {
    title: "JavaScript",
    icon: <FaJsSquare size={30} />,
    description:
      "Dynamic frontend interactivity and logic using modern JavaScript ES6+.",
  },
  {
    title: "SQL",
    icon: <FaDatabase size={30} />,
    description:
      "Proficient in writing queries, joins, and database management with SQL.",
  },
  {
    title: "HTML & CSS",
    icon: <FaHtml5 size={30} />,
    description:
      "Building structured, semantic web pages and responsive UIs with custom styling.",
  },
  {
    title: "React",
    icon: <FaReact size={30} />,
    description:
      "Component-based development with hooks, routing, state management.",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs size={30} />,
    description:
      "Server-side programming, RESTful APIs, and backend services using Node.js.",
  },
  {
    title: "Spring Boot",
    icon: <FaJava size={30} />,
    description:
      "Robust backend development using Spring Boot for creating scalable RESTful APIs.",
  },
];

const educationData = [
  {
    id: 1,
    degree: "B.com Computers Applications",
    institution: "XYZ University, Chennai",
    year: "2021 - 2023",
  },
  {
    id: 2,
    degree: "Higher Secondary (HSC)",
    institution: "ABC Matriculation School",
    year: "2019 - 2021",
  },
  {
    id: 3,
    degree: "Secondary School (SSLC)",
    institution: "ABC Matriculation School",
    year: "2017 - 2018",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="skills-header-container">
        <h1>Skills</h1>
      </div>
      <div className="skills-section" data-aos="fade-up">
        <div className="about-section">
          <h1 className="about-header">About Me</h1>
          <p className="skills-para">
            Hello! I'm a passionate and enthusiastic
            <strong> Web Developer </strong> with a strong foundation in
            <strong>
              {" "}
              HTML, CSS, JavaScript, Python, Java, Sql, MangoDB, React, Nodejs.
            </strong>
            Even though I’m at the beginning of my professional journey, I’ve
            already built several personal projects that reflect my love for
            clean, functional, and user-centered solutions.
          </p>
        </div>
        <div className="education">
          <h1 className="edu-head">Education</h1>
          {educationData.map((each, index) => (
            <li
              key={index}
              className="list-degree"
              data-aos={aosAnimations[index % aosAnimations.length]}
              data-aos-delay={index * 100}
            >
              <h4 className="course-name">{each.degree}</h4>
              <p className="clg-name">{each.institution}</p>
              <span className="year">{each.year}</span>
            </li>
          ))}
        </div>
      </div>
      <ul className="skills-icons-container">
        {skills.map((skill, index) => (
          <li className="skill-card" key={index} 
              data-aos={aosAnimations[index % aosAnimations.length]}>
            <div className="icon-container">
              <span>{skill.icon}</span>
              <h3>{skill.title}</h3>
            </div>
            <div className="skill-description">
              <p>{skill.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
