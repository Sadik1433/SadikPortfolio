import "./CssFile/hero.css";
import profile from './assets/profile-1.png'
import Icons from "./Icons";
import { FaDownload } from "react-icons/fa";
import {socialData} from '../data/data.jsx'

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="content-container" >
        <div className="header-section" data-aos="fade-right" >
          <div className="name-section">
            <span className="text-content">Hi, I am</span>
            <br />
            <h1 className="name-head">S.Sadik</h1>
          </div>
          <div className="text-content-container">
            <p className="text-content">
              I am a passionate Full Stack Developer with expertise in React, Java,
              and Python. I dedicate myself to building intuitive and efficient
              web solutions that make a real difference.
            </p>
          </div>
          <div className="icons-container">
            {socialData.map((item, i) => (
              <Icons key={i} {...item} />
            ))}
          </div>
          <div className="resume-container">
            <a href="/Sadik_Resume.pdf" download="Sadik_Resume.pdf" >
              <button className="resume-btn">
                Resume  <FaDownload size={25} />
              </button>
            </a>
          </div>
        </div>
        <div className="image-section" data-aos="fade-left">
          <img src={profile} alt="image" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
