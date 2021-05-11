import React, { Component } from "react";
import { userService } from "../../services/";
// import api from
// import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
// import { BrowserRouter as Link } from "react-router-dom";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      role: "guest",
      email: "", // "" ?
      password: "",
      error: null,
    };

    console.log("props", this.props);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("email", this.state.email);
  };
  handleOptionChange(e) {
    console.log(e);
    const role = e.target.value;
    this.setState({
      role: role,
    });
    console.log(this.state.role);
  }

  handleSubmit = async (e) => {
    const { first_name, last_name, role, email, password } = this.state;

    try {
      const response = await userService.signup(
        first_name,
        last_name,
        role,
        email,
        password
      );
      console.log(`response`, response);
      this.props.history.push("/signin");
    } catch (e) {
      // this.setState({ error: e.response.data.error });
      console.log(this.state.error);
    }
    e.preventDefault();
  };
  // SIGN UP / REGISTER / INSCRIPTION
  render() {
    return (
      <div className="signUp">
        <h1>Sign Up</h1>
        <form action="POST">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            name="first_name"
            value={this.state.first_name}
            onChange={this.handleChange}
          />

          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleChange}
          />

          {/* <label htmlFor="role">Role</label>
          <input
            type="checkbox"
            name="role"
            value={this.state.role}
            onChange={this.handleChange}
          /> */}

          <label for="role">Role</label>
          <select
            id="role"
            name="role"
            onChange={(e) => this.handleOptionChange(e)}
          >
            <option value="guest">Guest</option>
            <option value="host">Host</option>
          </select>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button onClick={this.handleSubmit}>Register</button>
        </form>
      </div>
    );
  }
}
