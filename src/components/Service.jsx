import "./CssFile/service.css";
// import image from "./assets/avatar.png";

import profile from './assets/profile-2.png'

import { servicesData } from "../data/data.jsx";

const aosAnimations = ["fade-up", "fade-right", "fade-left", "zoom-in"];

const Services = () => {
  return (
    <section id="service" className="service-section">
      <div className="service-header">
        <h2 className="services-heading">Services</h2>
      </div>
      <div className="service-container">
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
        <div className="service-image">
          <img src={profile} alt="service-image" className="service-img" />
        </div>
      </div>
    </section>
  );
};

export default Services;
