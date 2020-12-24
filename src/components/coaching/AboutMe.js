import React from "react"
import { NavLink } from "react-router-dom"
import "../../css/web/AboutMe.css"
import "../../css/mobile/AboutMeMobile.css"

const AboutMe = (props) => {
  return (
    <div className="info">
      <h1 className="about-me-title">About Me</h1>
      <p className="about-me-paragraph">
        Thanks for reaching out about joining my team. I am so thrilled to start
        you on your wellness journey towards finding empowerment through
        consistency and support. By joining this team, you will not only be
        given the tools to stay committed and get the results that you want, but
        also a community to keep you motivated and stand by you through it all.
        <br></br>
        <br></br>
        I'm offering a process that's all about keeping things UP and LIGHT and
        FUN and FUNNY! One that inspires you to take what you learn from your
        wellness journey and bring it towards every aspect of your life. Before
        you know it you will be creating your own happy beautiful lifestyle
        habits that are simple and attainable! All it takes is your commitment
        to dedicating your time and energy to prioritizing YOU.
        <br></br>
        <br></br>
        You'll have access to at-home on demand workouts, superfood nutrition
        shakes, a nutritious meal plan that works for you, and
        accountability/fitness groups all designed to help reach your goals. I
        am looking forward to learning more about and help support each other to
        make things happen!!
        <br></br>
        <br></br>
      <NavLink className="fitness-button" to="/fitness">
      <p>Fitness <i class="arrow right"></i></p>
      </NavLink>
      <NavLink className="back-to-home-button" to="/">
        <p><i class="arrow left"></i>Home </p>
      </NavLink>
      <br></br>
      <br></br>
      </p>
    </div>
  )
}

export default AboutMe
