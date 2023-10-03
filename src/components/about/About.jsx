import React from "react";
import "./about.css";
import ME from "../../assets/me2.png";
import { BiUser } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5> Experience </h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <BiUser className="about__icon" />
              <h5> Clients </h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5> Projects </h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I am a full stack developer with 3+ years experience in developing
            scalable web applications and working across the full stack. I love
            contributing to the positive outcome of making life easier with
            technology and creative coding.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
