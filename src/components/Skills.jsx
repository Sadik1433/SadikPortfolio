import "./CssFile/skill.css";
import { skills, educationData } from "../data/data.jsx";

const aosAnimations = ["fade-right", "fade-left"];

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="skills-header-container">
        <h1>Skills</h1>
      </div>
      <div className="skills-section" data-aos="fade-up">
        <div className="about-section">
          <h1 className="about-header">About Me</h1>
          <p className="skills-para" data-aos="fade-right">
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
        <ul className="education">
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
        </ul>
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
