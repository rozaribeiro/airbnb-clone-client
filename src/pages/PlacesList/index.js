import React, { Component } from "react";
import axios from "axios";
import "./placeList.css";
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
      const response = await availablePLaceService.getPlaceDisponibilty();
      this.setState({
        data: response.data,
      });
      console.log("REPONSE", response.data);
    } catch (e) {
      this.setState({ error: "erreur server" });
    }
  }

  render() {
    return (
      <div>
        {/* // <h1>Places List</h1> */}
        <div className="PlaceAvailableTitle">
          <h1>Appartement à louer:</h1>
        </div>

        {this.state.data.map((element, index) => {
          return (
            <div key={index} className="placeAvailable">
              <ul>
                <li>{element.name}</li>
                <li>{element.description}</li>
                <li>Nombre de chambre: {element.rooms}</li>
                <li>Nombre de salle de bain{element.bathrooms}</li>
                <li>Prix:{element.price_by_night}£</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
