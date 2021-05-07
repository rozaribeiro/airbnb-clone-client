import React, { Component } from "react";
import { userService } from "../../services/";
// import api from
// import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import { BrowserRouter as Link } from "react-router-dom";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  handleSubmit = async (e) => {
    const { email, password } = this.state;

    try {
      const response = await userService.signup(email, password);
      console.log("nous sommes là!");
      console.log(`response`, response);
      // localStorage.setItem('token', response.data);
      // this.context.setAuth(true);
      // this.props.history.push("/");
    } catch (e) {
      this.setState({ error: e.response.data.error });
      console.log(this.state.error);
    }
    e.preventDefault();
  };
  // SIGN UP / REGISTER / INSCRIPTION
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form action="POST">
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button onClick={this.handleSubmit}>Inscription</button>
        </form>
      </div>
    );
  }
}
