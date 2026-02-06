import "./CssFile/hero.css";
import profile from "./assets/avatar.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Icons from "./Icons";

const socialData = [
  {
    id: 1,
    icon: <FaInstagram size={30} />,
    color: "#E1306C",
    name: "User",
    username: "insta_user",
    followers: "800",
  },
  {
    id: 2,
    icon: <FaGithub size={30} />,
    color: "#ffffff",
    name: "Sadik",
    username: "sadik-dev",
    followers: "120",
  },
  {
    id: 3,
    icon: <FaLinkedin size={30} />,
    color: "#0A66C2",
    name: "Sadik",
    username: "sadik",
    followers: "500",
  },
  {
    id: 4,
    icon: <FaWhatsapp size={30} />,
    color: "#0ac216",
    name: "Sadik",
    username: "sadik",
    followers: "500",
  },
];

{
  socialData.map((item, i) => <Icons key={i} {...item} />);
}
const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="content-container">
        <div className="header-section" data-aos="fade-right">
          <div className="name-section">
            <span className="text-content">Hi, I am</span>
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
            {socialData.map((item, i) => (
              <Icons key={i} {...item} />
            ))}
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
