import React, { Component } from "react";
// import api from
// import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import { BrowserRouter as Link } from "react-router-dom";

export default class SignInForm extends Component {
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

  handleSubmit() {
    // api.post()
    // if (error) {
    // console.log(error);
    // }
    // else {
    //   console.log("else");
    //   // localStorage
    // }
  }
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form action="">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}></button>
          <Link>Forgot Password?</Link>
          <Link>Forgot Email?</Link>
        </form>
      </div>
    );
  }
}
