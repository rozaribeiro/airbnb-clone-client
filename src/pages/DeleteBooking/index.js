import React, { Component } from "react";
import axios from "axios";
import { availablePLaceService } from "../../services/";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await availablePLaceService.deletedPLaceService();
      this.setState({
        data: response.data,
      });
      console.log("REPONSE", response.data);
    } catch (e) {
      this.setState({ error: "erreur server" });
    }
  }

  render() {
    return <div></div>;
  }
}
