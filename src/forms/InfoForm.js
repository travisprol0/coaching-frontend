import React from "react"
import emailjs from "emailjs-com"
import "../css/web/InfoForm.css"
import "../css/mobile/InfoFormMobile.css"

class InfoForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    instagram: "",
    location: "",
    country: "",
    currentFitnessRoutine: "",
    struggle: "",
    userStruggle: "",
    wantMost: "",
    success: "pre email",
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  check = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  whatCountry = () => {
    if (this.state.location === "Other") {
      return (
        <>
          <br></br>
          <span>
            Type Your Country:
            <input
              type="text"
              name="country"
              value={this.state.country}
              placeholder="Type Your Country"
              onChange={this.changeHandler}
            ></input>
          </span>
        </>
      )
    }
  }

  struggle = () => {
    if (this.state.struggle === "Other") {
      return (
        <>
          <br></br>
          <span>
            What do you struggle with?:
            <textarea
              type="text"
              name="userStruggle"
              value={this.state.userStruggle}
              onChange={this.changeHandler}
            ></textarea>
          </span>
        </>
      )
    }
  }

  renderForm = () => {
    if (this.state.success === "pre email") {
      return (
        <form onSubmit={this.sendEmail}>
          <span>
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder="First Name"
              onChange={this.changeHandler}
            ></input>
          </span>
          <br></br>
          <span>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="Last Name"
              onChange={this.changeHandler}
            ></input>
          </span>
          <br></br>
          <span>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.changeHandler}
            ></input>
          </span>
          <br></br>
          <span>
            Instagram Handle:
            <input
              type="text"
              name="instagram"
              value={this.state.instagram}
              placeholder="instagram handle"
              onChange={this.changeHandler}
            ></input>
          </span>
          <br></br>
          <span>
            Where Are You From?
            <select
              name="location"
              value={this.state.location}
              onChange={this.changeHandler}
            >
              <option>Choose One</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Other</option>
            </select>
          </span>
          {this.whatCountry()}
          <br></br>
          <span>
            What Does Your Current Fitness Routine Look Like?
            <textarea
              type="text"
              name="currentFitnessRoutine"
              value={this.state.currentFitnessRoutine}
              onChange={this.changeHandler}
            ></textarea>
          </span>
          <br></br>
          <span>
            What best describes you currently?
            <br></br>
            <input
              type="checkbox"
              value="Student"
              name="profession1"
              onChange={this.check}
            ></input>
            <label for="profession1">Student</label>
            <br></br>
            <input
              type="checkbox"
              value="Unemployed"
              name="profession2"
              onChange={this.check}
            ></input>
            <label for="profession2">Unemployed</label>
            <br></br>
            <input
              type="checkbox"
              value="Employed Part-Time"
              name="profession3"
              onChange={this.check}
            ></input>
            <label for="profession3">Employed Part-Time</label>
            <br></br>
            <input
              type="checkbox"
              value="Employed Full-Time"
              name="profession4"
              onChange={this.check}
            ></input>
            <label for="profession4">Employed Full-Time</label>
            <br></br>
            <input
              type="checkbox"
              value="Work From Home"
              name="profession5"
              onChange={this.check}
            ></input>
            <label for="profession5">Work From Home</label>
            <br></br>
            <input
              type="checkbox"
              value="Own My Own Business"
              name="profession6"
              onChange={this.check}
            ></input>
            <label for="profession6">Own My Own Business</label>
            <br></br>
            <input
              type="checkbox"
              value="READY TO FIND MY LIGHT"
              name="profession7"
              onChange={this.check}
            ></input>
            <label for="profession7">READY TO FIND MY LIGHT</label>
            <br></br>
          </span>
          <br></br>
          <span>
            What do you struggle with most?
            <select
              name="struggle"
              value={this.state.struggle}
              onChange={this.changeHandler}
            >
              <option>Choose One</option>
              <option>Healthy Eating</option>
              <option>Consistent/Effective Workouts</option>
              <option>
                Accountability (I struggle getting myself to the gym)
              </option>
              <option>All of the Above</option>
              <option>Other</option>
            </select>
          </span>
          {this.struggle()}
          <br></br>
          <span>
            What do you want the most out of joining this team?
            <textarea
              type="text"
              name="wantMost"
              value={this.state.wantMost}
              onChange={this.changeHandler}
            ></textarea>
          </span>
          <br></br>
          <input type="submit" value="Send Message"></input>
        </form>
      )
    } else if (this.state.success === "false") {
      return (
        <>
          <h1>Sorry, something went wrong. Please try again!</h1>
          <form onSubmit={this.sendEmail}>
            <span>
              First Name:
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                placeholder="First Name"
                onChange={this.changeHandler}
              ></input>
            </span>
            <br></br>
            <span>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                placeholder="Last Name"
                onChange={this.changeHandler}
              ></input>
            </span>
            <br></br>
            <span>
              Email:
              <input
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.changeHandler}
              ></input>
            </span>
            <br></br>
            <span>
              Instagram Handle:
              <input
                type="text"
                name="instagram"
                value={this.state.instagram}
                placeholder="instagram handle"
                onChange={this.changeHandler}
              ></input>
            </span>
            <br></br>
            <span>
              Where Are You From?
              <select
                name="location"
                value={this.state.location}
                onChange={this.changeHandler}
              >
                <option>Choose One</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Other</option>
              </select>
            </span>
            {this.whatCountry()}
            <br></br>
            <span>
              What Does Your Current Fitness Routine Look Like?
              <textarea
                type="text"
                name="currentFitnessRoutine"
                value={this.state.currentFitnessRoutine}
                onChange={this.changeHandler}
              ></textarea>
            </span>
            <br></br>
            <span>
              What best describes you currently?
              <br></br>
              <input
                type="checkbox"
                value="Student"
                name="profession1"
                onChange={this.check}
              ></input>
              <label for="profession1">Student</label>
              <br></br>
              <input
                type="checkbox"
                value="Unemployed"
                name="profession2"
                onChange={this.check}
              ></input>
              <label for="profession2">Unemployed</label>
              <br></br>
              <input
                type="checkbox"
                value="Employed Part-Time"
                name="profession3"
                onChange={this.check}
              ></input>
              <label for="profession3">Employed Part-Time</label>
              <br></br>
              <input
                type="checkbox"
                value="Employed Full-Time"
                name="profession4"
                onChange={this.check}
              ></input>
              <label for="profession4">Employed Full-Time</label>
              <br></br>
              <input
                type="checkbox"
                value="Work From Home"
                name="profession5"
                onChange={this.check}
              ></input>
              <label for="profession5">Work From Home</label>
              <br></br>
              <input
                type="checkbox"
                value="Own My Own Business"
                name="profession6"
                onChange={this.check}
              ></input>
              <label for="profession6">Own My Own Business</label>
              <br></br>
              <input
                type="checkbox"
                value="READY TO FIND MY LIGHT"
                name="profession7"
                onChange={this.check}
              ></input>
              <label for="profession7">READY TO FIND MY LIGHT</label>
              <br></br>
            </span>
            <br></br>
            <span>
              What do you struggle with most?
              <select
                name="struggle"
                value={this.state.struggle}
                onChange={this.changeHandler}
              >
                <option>Choose One</option>
                <option>Healthy Eating</option>
                <option>Consistent/Effective Workouts</option>
                <option>
                  Accountability (I struggle getting myself to the gym)
                </option>
                <option>All of the Above</option>
                <option>Other</option>
              </select>
            </span>
            {this.struggle()}
            <br></br>
            <span>
              What do you want the most out of joining this team?
              <textarea
                type="text"
                name="wantMost"
                value={this.state.wantMost}
                onChange={this.changeHandler}
              ></textarea>
            </span>
            <br></br>
            <input type="submit" value="Send Message"></input>
          </form>
        </>
      )
    } else if (this.state.success === "true") {
      return (
        <p className="success-paragraph">
          Thanks for taking the time to fill out this form and making this
          decision to make YOU a priority! I look forward to talking to you more
          about your wellness journey!
        </p>
      )
    }
  }

  sendEmail = (e) => {
    e.preventDefault()
    //  first argument below: service_4fh66ju
    emailjs
      .sendForm("", "template_oik5t0k", e.target, "user_qGTcZI0dV3MS1J6d7CirL")
      .then(
        (result) => {
          console.log(result.text)
          this.setState({ success: "true" })
        },
        (error) => {
          console.log(error.text)
          this.setState({ success: "false" })
        }
      )
  }

  render() {
    // console.log(this.state.success)
    return this.renderForm()
  }
}

export default InfoForm
