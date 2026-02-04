import "./CssFile/hero.css";
// import profile from './assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="content-container">
        <div className="header-section">
          <div className="name-section">
            <h1>Name -------</h1>
          </div>
          <div className="text-content-container">
            <p>
              Hero Section Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Consequatur quo similique amet reprehenderit quasi iusto
              doloremque tempore nemo sequi recusandae! At, fugit assumenda.
              Fugiat quod vero ipsum natus illo illum.
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
        <div className="image-section">
          <img  src="" alt="image" className="profile-image"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
