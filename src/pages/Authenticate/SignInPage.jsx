import React, { Component } from "react";
// import api from
import appContext from "../../store";

// import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import { BrowserRouter as Link } from "react-router-dom";
import { userService } from "../../services/";

export default class SignInForm extends Component {
  static contextType = appContext;
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
    console.log("password", this.state.password);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // const { email, password } = this.state;
    try {
      const response = await userService.signin(
        this.state.email,
        this.state.password
      );
      // console.log(response);
      localStorage.removeItem("token");
      localStorage.setItem("token", response.data.token);
      // console.log(`localStorage contents: `, localStorage);
      this.context.setAuth(true);
      // console.log(response.data.user);
      console.log(response.data);

      const {
        first_name,
        last_name,
        email,
        role,
        authUserId,
      } = response.data.user; // + id
      this.context.setUserInfos(first_name, last_name, email, role, authUserId);

      // console.log(`this.context`, this.context);
      this.props.history.push("/");
    } catch (error) {
      console.error(error);
      // console.clear(error);
      this.setState({ error: error.response.data.error });
    }
  };
  render() {
    return (
      <>
        <h1>Sign In</h1>
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
          <button onClick={this.handleSubmit}>Log In</button>
          <Link>Forgot Password?</Link>
          <Link>Forgot Email?</Link>
        </form>
      </>
    );
  }
}
