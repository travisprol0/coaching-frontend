import React from "react"
import emailjs from "emailjs-com"

class InfoForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    iphone: "",
    email: "",
    message: "",
    success: "pre email",
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
            Phone Number:
            <input
              type="number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              placeholder="Phone Number"
              onChange={this.changeHandler}
            ></input>
          </span>
          <br></br>
          {/* <span>
        iPhone?
        <select
          name="iphone"
          value={this.state.iphone}
          onChange={this.changeHandler}
        >
          <option>Choose One</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </span>
      <br></br> */}
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
            Message:
            <input
              type="text"
              name="message"
              value={this.state.message}
              placeholder="Message"
              onChange={this.changeHandler}
            ></input>
          </span>
          <br></br>
          <input type="submit" value="Send Message"></input>
        </form>
      )
    } else if (this.state.success === "false") {
      return (
        <>
          <h1>Something went wrong! Please try again!</h1>
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
              Phone Number:
              <input
                type="number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                placeholder="Phone Number"
                onChange={this.changeHandler}
              ></input>
            </span>
            <br></br>
            {/* <span>
        iPhone?
        <select
          name="iphone"
          value={this.state.iphone}
          onChange={this.changeHandler}
        >
          <option>Choose One</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </span>
      <br></br> */}
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
              Message:
              <input
                type="text"
                name="message"
                value={this.state.message}
                placeholder="Message"
                onChange={this.changeHandler}
              ></input>
            </span>
            <br></br>
            <input type="submit" value="Send Message"></input>
          </form>
        </>
      )
    } else if (this.state.success === "true") {
      return <h1>Thank you! You'll hear back from me soon!</h1>
    }
  }

  sendEmail = (e) => {
    e.preventDefault()
    //  first argument below: service_4fh66ju
    emailjs
      .sendForm(
        "service_4fh66ju",
        "template_oik5t0k",
        e.target,
        "user_qGTcZI0dV3MS1J6d7CirL"
      )
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
    console.log(this.state.success)
    return <>{this.renderForm()}</>
  }
}

export default InfoForm
