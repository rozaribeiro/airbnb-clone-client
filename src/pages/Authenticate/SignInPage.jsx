import React, { Component } from "react";
import appContext from "../../store";
import { BrowserRouter as Link } from "react-router-dom";
import { userService } from "../../services/";
import "./signInPage.scss";

export default class SignInForm extends Component {
  static contextType = appContext;
  constructor(props) {
    super(props);

    this.state = {
      email: "host@gmail.com",
      password: "1234",
      error: null,
    };

    console.log("props", this.props);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log("email", this.state.email);
    // console.log("password", this.state.password);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.signin(
        this.state.email,
        this.state.password
      );
      console.log(response);
      // localStorage.removeItem("token");
      localStorage.setItem("token", response.data.token);
      // localStorage.setItem("token", response.data.token);
      this.context.setAuth(true);
      const { first_name, last_name, role, authUserId, email } =
        response.data.user;
      this.context.setUserInfos(first_name, last_name, role, authUserId, email);
      // console.log(this.appContext);
      console.log(this.context);
      this.props.history.push("/");
    } catch (error) {
      console.error(error);
      this.setState({ error: error });
    }
  };

  componentDidMount() {
    if (this.context.isAuth === true) {
      this.props.history.push("/");
    }
    console.log(this.context);
  }
  render() {
    return (
      <>
        <h1>Sign In</h1>
        <form action="POST" className="sign-in-form-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Log In</button>
          <Link to="/reset-password">Forgot Password</Link>
          <Link to="/reset-email">Forgot Email</Link>
        </form>
      </>
    );
  }
}
