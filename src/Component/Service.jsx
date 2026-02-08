import "./CssFile/service.css";
import image from "./assets/avatar.png";

import {
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaLaptopCode,
  FaPalette,
  FaPlug,
} from "react-icons/fa";

const aosAnimations = ["fade-up", "fade-right", "fade-left", "zoom-in"];

const servicesData = [
  {
    icon: <FaCode size={30} />,
    title: "Frontend Development",
    description:
      "Building responsive and dynamic user interfaces using React, HTML, and CSS.",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Mobile Optimization",
    description:
      "Creating mobile-first designs and ensuring cross-device compatibility.",
  },
  {
    icon: <FaDatabase size={30} />,
    title: "Backend & Databases",
    description:
      "RESTful APIs and databases using Node.js, Express, and MongoDB.",
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: "Full-Stack Projects",
    description:
      "Combining frontend and backend to deliver complete web solutions.",
  },
  {
    icon: <FaPalette size={30} />,
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces and user journeys using Figma and modern trends.",
  },
  {
    icon: <FaPlug size={30} />,
    title: "API Integration",
    description:
      "Connecting to third-party APIs like Google Maps, OpenAI, and more.",
  },
];

const Services = () => {
  return (
    <section id="service" className="service-section">
      <div className="service-header">
        <h2 className="services-heading">Services</h2>
      </div>
      <div className="service-container" data-aos="fade-right">
        <ul className="services-grid">
          {servicesData.map((service, index) => (
            <li
              key={index}
              className="service-card"
              data-aos={aosAnimations[index % aosAnimations.length]}
              data-aos-delay={index * 100}
            >
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="service-image" data-aos="fade-left">
          <img src={image} alt="service-image" className="service-img" />
        </div>
      </div>
    </section>
  );
};

export default Services;
