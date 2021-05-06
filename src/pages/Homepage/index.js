import React, { Component } from "react";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testValue : "hey",
    };

    console.log("props", this.props);
  }

  login = () => {
    this.props.history.push("/signin");
  };

  render() {
    return (
      <>
        {/* <LoginForm /> */}
        <li>
          <button onClick={this.login}>Connexion</button>
        </li>
      </>
    );
  }
}
