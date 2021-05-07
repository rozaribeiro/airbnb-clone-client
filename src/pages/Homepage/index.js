import React, { Component } from "react";

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

  render() {
    return (
      <>
        {/* <LoginForm /> */}
        <li>
          <button onClick={this.signUp}>Sign Up (Inscription)</button>
        </li>
      </>
    );
  }
}
