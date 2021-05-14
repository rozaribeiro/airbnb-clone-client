import React from "react";
import api from "../../../services/api";
import appContext from "../../../store";

class AddPlaceForm extends React.Component {
  static contextType = appContext;

  constructor(props) {
    super(props);

    this.state = {
      city_id: 1,
      name: "devName", // aka place name
      description: "devDesc",
      rooms: 1,
      bathrooms: 1,
      max_guests: 1,
      price_by_night: 23,
      available: 1,
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddPlaceSubmit = this.handleAddPlaceSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };
  handleChangeInt = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: parseInt(value) });
    console.log(this.state);
  };
  handleOptionChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: parseInt(value) });
  };

  handleAddPlaceSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    console.log(token);

    const place_data = {
      city_id: parseInt(this.state.city_id),
      name: this.state.name,
      description: this.state.description,
      rooms: this.state.rooms,
      bathrooms: this.state.bathrooms,
      max_guests: this.state.max_guests,
      price_by_night: this.state.price_by_night,
      available: this.state.available,
      role: this.context.role,
    };

    try {
      api.post("/api/places", place_data).then(
        (response) => {
          console.log(response);
          if (response.status === 201) {
            // this.props.history.push("/");
          } // displaySuccessMessage("Succesfully created the place!")
        },
        (error) => {
          console.error(error);
          // displayError("There was an error trying to add your place.")
        }
      );

      // this.props.history.push('/home');
    } catch (e) {
      console.error(e);
      // this.setState({error: e.response.data.error});
    }
  }
  maxOptions(max, before_int_text, after_int_text) {
    let array = [];

    for (let int = 1; int <= max; int++) {
      array.push(
        <option value={int} key={int}>
          {before_int_text} {int}{" "}
          {int === 1 ? after_int_text.slice(0, -1) : after_int_text}
        </option>
      );
      // condition to not have an 's' if integer is === 1
    }
    return array;
  }
  render() {
    return (
      <form action="POST" className="add-place-form-container">
        <ul>
          <li>
            <label htmlFor="city_id">City (ID) : convert to cityName!</label>
            <input
              value={this.state.city_id}
              type="text"
              name="city_id"
              placeholder="City name"
              onChange={(e) => this.handleChangeInt(e)}
            />
          </li>
          <li>
            <label htmlFor="name">Place Name</label>
            <input
              placeholder="Place name"
              value={this.state.name}
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </li>

          <li>
            <label htmlFor="description">Description</label>

            {
              <textarea
                placeholder="Description"
                value={this.state.description}
                type="text"
                name="description"
                onChange={this.handleChange}
              />
            }
          </li>
          <li>
            <label htmlFor="rooms">Rooms</label>
            <select
              id="rooms"
              name="rooms"
              onChange={(e) => this.handleOptionChange(e)}
            >
              {this.maxOptions(20, null, "rooms")}
            </select>
          </li>
          <li>
            <label htmlFor="bathrooms">Bathrooms</label>
            <select
              id="bathrooms"
              name="bathrooms"
              onChange={(e) => this.handleOptionChange(e)}
            >
              {this.maxOptions(10, null, "bathrooms")}
            </select>
          </li>

          <li>
            <label htmlFor="max_guests">Max guests</label>
            <select
              id="max_guests"
              name="max_guests"
              onChange={(e) => this.handleOptionChange(e)}
            >
              {this.maxOptions(100, "for", "guests")}
            </select>
          </li>

          <li>
            <label htmlFor="price_by_night">Price per night</label>
            <input
              value={this.state.price_by_night}
              type="text"
              name="price_by_night"
              onChange={(e) => this.handleChangeInt(e)}
            />
            {this.context.currency}
          </li>

          {/* <label htmlFor="available">available</label>
          <input
            value={this.state.available}
            type="checkbox"
            name="available"
            onChange={this.handleChange}
            checked
          /> */}

          <button
            className="add-place-button"
            onClick={this.handleAddPlaceSubmit}
          >
            {" "}
            Add a place
          </button>
        </ul>
      </form>
    );
  }
}

export default AddPlaceForm;
