import React, { Component } from "react";
import { availablePLaceService } from "../../services/";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availablePlace: [],
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await availablePLaceService.getPlaceDisponibilty();
      this.setState({
        availablePlace: response.data,
      });
    } catch (e) {
      this.setState({ error: "erreur server" });
    }
  }

  render() {
    return (
      <div>
        <h1>Bonjour</h1>
      </div>
    );
  }
}
