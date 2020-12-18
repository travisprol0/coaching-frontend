import "../Home.css";
import sunset from '../images/sunset.jpg'
import React from "react";


const Home = () => {
  return (
    <div className="home">
       {/* <div className="image1">
        <img src="/sunset.jpg" alt="sunset" />
      </div>  */}
      {/* <div className="image2">
      </div> */}
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
        <button className="get-started">Get Started!</button>
        <img src="/christiana.JPG" alt="christiana" />
      </div>
    </div>
  );
};

export default Home;
