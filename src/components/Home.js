import React from "react";
import { NavLink } from "react-router-dom";
import "../css/web/Home.css";
import "../css/mobile/HomeMobile.css"

const Home = () => {
  return (
    <div className="home">
      <div className="all-title">
        <p className="title">Health and Wellness Training</p>
        <p className="subtitle">with Christiana Alicante</p>
        <p className="paragraph">
          For the person looking for a structured workout routine you can do
          from your home, right on your phone or computer. The person who wants
          a manageable and easy-to-follow meal plan that makes nutrition easy.
          The person who wants an inspiring and encouraging community of women
          all practicing a healthy lifestyle and working towards their fitness
          goals. The person who knows they can be better, wants to be better,
          but just needs the resources, tips & tricks, and tools to motivate
          them to continuously better their mind and body.
        </p>
        <NavLink className="get-started" to="/info">
          {" "}
          Get Started!{" "}
        </NavLink>
        <NavLink className="contact-me" to="/contact">
          {" "}
          Contact Me!{" "}
        </NavLink>
        <img src="/christiana.JPG" alt="christiana" />
      </div>
    </div>
  );
};

export default Home;
