import "./CssFile/hero.css";
import profile from './assets/avatar.png';

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="content-container">
        <div className="header-section" data-aos="fade-right">
          <div className="name-section">
            <span className="text-content">
             Hi, I am
            </span>
            <br />
            <h1 className="name-head">S.Sadik</h1>
          </div>
          <div className="text-content-container">
            <p className="text-content">
              I'm a passionate Web Developer with expertise in React, Java,
              python. I love building intuitive and efficient solutions that
              make a difference.
            </p>
          </div>
          <div className="icons-container">
            <span className="icons">WhatsApp</span>
            <span className="icons">Instagram</span>
            <span className="icons">LinkedIn</span>
            <span className="icons">GitHub</span>
          </div>
          <div className="resume-container">
            <button className="resume-btn">Download</button>
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
