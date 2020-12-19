import React from "react";

class InfoForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    iphone: "",
    email: "",
    message: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form>
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
        <span>
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
          Message:
          <textarea
            type="text"
            name="message"
            value={this.state.message}
            placeholder="Message"
            onChange={this.changeHandler}
          ></textarea>
        </span>
      </form>
    );
  }
}

export default InfoForm;
