import { useState } from "react";
import "./CssFile/contact.css";
import { contactDetails } from "../data/data";


const aosAnimations = ["fade-right", "fade-left"];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading-container">
        <h1 className="contact-heading">Contact</h1>
      </div>
      <div className="contact-container" data-aos="fade-right">
        <div className="contact-context-container">
          <div className="contact-context">
            <p>
              I'm skilled in Java, Python, JavaScript, SQL, HTML, CSS, React,
              and Node.js. I specialize in building full-stack web applications
              with clean UI and efficient backend services. Have a project in
              mind or need help with your website or app? Feel free to reach out
              through the form below!
            </p>
          </div>
          <ul className="contact-details-list">
            <h4>Conatct Me</h4>
            {contactDetails.map((e, index) => (
              <li className="contact-details-list-item" key={index} data-aos={aosAnimations[index % aosAnimations.length]}
                data-aos-delay={index * 100}>
                <div className="contact-details-list-item-icon">
                  {e.icon}
                </div>
                <div>
                  <h5>
                    {e.name}
                  </h5>
                  <span>
                    {e.value}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="form-container" data-aos="slide-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Contact Me</h2>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <label>Phone:</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              placeholder="Enter your message"
              required
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
