import React from "react";
import api from "../../../services/api";
// import {withRouter} from 'react-router-dom';
import appContext from "../../../store";

class AddPlaceForm extends React.Component {
  static contextType = appContext;

  constructor(props) {
    super(props);

    this.state = {
      city_id: "",
      users_id: "", // host ID?
      // users_id: this.context.authUserId, // host ID?
      name: "",
      // place_name: "",
      description: "",
      rooms: 1,
      bathrooms: 1,
      max_guests: 1,
      price_by_night: "",
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

    // console.log("submitted");
    // console.log(e.target.value);
    // try {
    //     const response = await userService.login(email, password);
    //     localStorage.setItem('token', response.data.token);
    //     this.context.setAuth(true);
    //     this.props.history.push('/home');
    // } catch(e) {
    //     this.setState({error: e.response.data.error});
    // // console.log(this.state.place_name);
    const token = localStorage.getItem("token");
    console.log(token);
    // get from localStorage when authenticated
    // const api = axios.create({
    // baseURL: `http://localhost:8000/`,
    // });

    // const {
    //   city_id,
    //   users_id,
    //   name,
    //   description,
    //   rooms,
    //   bathrooms,
    //   max_guests,
    //   price_by_night,
    //   available,
    // } = this.state;
    const place_data = {
      city_id: parseInt(this.state.city_id),
      users_id: parseInt(this.state.users_id),
      // users_id: this.context.authUserId,
      name: this.state.name,
      description: this.state.description,
      rooms: this.state.rooms,
      bathrooms: this.state.bathrooms,
      max_guests: this.state.max_guests,
      price_by_night: this.state.price_by_night,
      available: this.state.available,
    };

    // console.log(place_data);
    try {
      api.post("/api/places", place_data).then(
        // axios.post("http://localhost:8000/api/places", place_data, config).then(
        (response) => {
          console.log(response);

          // this.props.history.push("/bookings");
        },
        (error) => {
          console.error(error);
        }
      );

      //   axios({
      //     method: "post",
      //     url: "http://localhost:8000/api/places",
      //     data: {
      //       place: "place_name",
      //     },
      //   });

      // localStorage.setItem('token', response.data.token);
      // this.context.setAuth(true);
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
    let maxGuests = 15;
    let maxGuestOptions = [];
    for (let i = 1; i <= maxGuests; i++) {
      maxGuestOptions.push(
        <option value={i} key={i}>
          for {i} guests
        </option>
      );
    }

    // const maxGuests = 50;
    return (
      <form action="POST" className="add-place-form-container">
        <ul>
          <li>
            <label htmlFor="users_id">[dev] host_user_id</label>
            <input
              value={this.state.users_id}
              type="text"
              name="users_id"
              onChange={(e) => this.handleChangeInt(e)}
            />
          </li>
          <li>
            <label htmlFor="city_id">City (ID) : convert to cityName!</label>
            <input
              value={this.state.city_id}
              type="text"
              name="city_id"
              onChange={(e) => this.handleChangeInt(e)}
            />
          </li>
          <li>
            <label htmlFor="name">Place Name</label>
            <input
              value={this.state.name}
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </li>

          <li>
            <label htmlFor="description">Description</label>
            <input
              value={this.state.description}
              type="text"
              name="description"
              onChange={this.handleChange}
            />
          </li>
          <li>
            <label htmlFor="rooms">Rooms</label>
            <select
              id="rooms"
              name="rooms"
              onChange={(e) => this.handleOptionChange(e)}
            >
              {/* <option value="">{maxGuestOptions}</option> */}
              {this.maxOptions(20, null, "rooms")}
            </select>
          </li>
          <li>
            <label htmlFor="bathrooms">Bathrooms</label>
            {/* <input
            value={this.state.bathrooms}
            type="text"
            name="bathrooms"
            onChange={this.handleChange}
          /> */}
            <select
              id="bathrooms"
              name="bathrooms"
              onChange={(e) => this.handleOptionChange(e)}
            >
              {/* <option value="">{maxGuestOptions}</option> */}
              {this.maxOptions(10, null, "bathrooms")}
            </select>
          </li>
          {/* <label htmlFor="max_guests">Max guests</label>
          <input
            value={this.state.max_guests}
            type="text"
            name="max_guests"
            onChange={this.handleChange}
          /> */}
          <li>
            <label htmlFor="max_guests">Max guests</label>
            <select
              id="max_guests"
              name="max_guests"
              onChange={(e) => this.handleOptionChange(e)}
            >
              {/* <option value="">{maxGuestOptions}</option> */}
              {/* {maxGuestOptions} */}
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
      // <article onClick={(e) => this.props.history.push('/article/' + this.props.id)}>
      //     <h5>{this.props.title}</h5>
      //     <img src={this.props.img} alt={this.props.title} />
      // </article>
    );
  }
}

export default AddPlaceForm;
