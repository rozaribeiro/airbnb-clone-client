import React, { Component } from "react";
import SearchByCity from "../partials/Header/SearchByCity"
export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testValue: "hey",
    };

    console.log("props", this.props);
  }

  signUp = () => {
    this.props.history.push("/signup");
  };
  signIn = () => {
    this.props.history.push("/signin");
  };
  placeavailable = () => {
    this.props.history.push("/places/available");
  };

  render() {
    return (
      <>
        {/* <LoginForm /> */}
        <SearchByCity/>
        <li>
          <button onClick={this.signUp}>Sign Up (Register)</button>
          <button onClick={this.signIn}>Sign In (Login)</button>
          <button onClick={this.placeavailable}>Appartements à louer</button>
        </li>
      </>
    );
  }
}
