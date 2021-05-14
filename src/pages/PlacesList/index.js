import React, { Component } from "react";
import "./placeList.css";
import { availablePLaceService } from "../../services/";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Redirect,
    Link
  } from "react-router-dom";
import appContext from "../../store"

export default class index extends Component {
    static contextType = appContext ;
    constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null,
    };
  }
  tooBook (){
    return ( 
      <appContext.Consumer>
          {(context) => (
            this.context.role === "guest" && <button><Link to="/bookings"></Link></button>
        )}
      </appContext.Consumer>
    )
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
                {this.postBook}
              </ul>
            </div>
          );
        })}
        {this.tooBook()}
      </div>
    );
  }
}

