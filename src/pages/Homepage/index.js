import React, { Component } from "react";
import SearchByCity from "../partials/Header/SearchByCity";
import Button from "../../components/Button/index";
import appContext from "../../store";
import SignInModal from "../../components/Modal/SignInModal";
import "./homepage.scss";
export default class index extends Component {
  static useContext = appContext;
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    console.log("props", this.props);
  }

  signUp = () => {
    this.props.history.push("/signup");
  };
  signIn = () => {
    this.props.history.push("/signin");
  };
  addPlace = () => {
    this.props.history.push("/places");
  };
  bookings = () => {
    this.props.history.push("/bookings");
  };
  placeavailable = () => {
    this.props.history.push("/places/available");
  };

  render() {
    return (
      <div className="homepageImage">
        {/* <LoginForm /> */}
        {/* <ul>
          <button onClick={this.signUp}>Sign Up (Register)</button>
          <button onClick={this.signIn}>Sign In (Login)</button>
        </ul> */}
        {console.log(`test context`, appContext)}
        {console.log(`this.context`, this.context)}
        {console.log(`this.context.isAuth`, this.context.isAuth)}
        {/* {this.context.isAuth === true ? ( */}
        {/* <SignInModal show={this.state.show} /> */}
        {this.context.isAuth && (
          <button onClick={this.addPlace}>Add a place</button>
        )}{" "}
        <button onClick={this.addPlace}>Add a place</button>
        {/* ) : null} */}
        {this.context.isAuth && (
          <button onClick={this.bookings}>Bookings</button>
        )}
        <button onClick={this.bookings}>Bookings</button>
        <button onClick={this.placeavailable}>Places to rent</button>
        {/* <Button onClick={this.addPlace}/> */}
        {/* <Button props={{ text: "test" }} /> */}
        {/* <Button props={{ function: this.addPlace, text: "test" }} /> */}
      </div>
    );
  }
}
