import React, { Component } from "react";

export default class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testValue : "hey",
    };

    console.log("props", this.props);
  }

  render() {
    return (
      <div>
        <h1>Hello Rosa!!</h1>
        <form action="">
          <label htmlFor="username"></label>
          <input type="text"/>
          <label htmlFor="password"></label>

          <input type="" />
        </form>
      </div>
    );
  }
}
