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
      rooms: "",
      bathrooms: "",
      max_guests: "",
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
      city_id: this.state.city_id,
      users_id: this.state.users_id,
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
      // console.log(this.state.place_name);
    }
  }
  render() {
    // console.log(this.context);
    return (
      <form action="POST">
        <ul>
          <label htmlFor="users_id">host_user_id</label>
          <input
            value={this.state.users_id}
            type="text"
            name="users_id"
            onChange={this.handleChange}
          />
          <label htmlFor="city_id">City (ID)</label>
          <input
            value={this.state.city_id}
            type="text"
            name="city_id"
            onChange={this.handleChange}
          />

          <label htmlFor="name">Place Name</label>
          <input
            value={this.state.name}
            type="text"
            name="name"
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            value={this.state.description}
            type="text"
            name="description"
            onChange={this.handleChange}
          />
          <label htmlFor="rooms">Rooms</label>
          <input
            value={this.state.rooms}
            type="text"
            name="rooms"
            onChange={this.handleChange}
          />
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            value={this.state.bathrooms}
            type="text"
            name="bathrooms"
            onChange={this.handleChange}
          />
          <label htmlFor="max_guests">Max guests</label>
          <input
            value={this.state.max_guests}
            type="text"
            name="max_guests"
            onChange={this.handleChange}
          />
          <label htmlFor="price_by_night">Price per night</label>
          <input
            value={this.state.price_by_night}
            type="text"
            name="price_by_night"
            onChange={this.handleChange}
          />
          {/* <label htmlFor="available">available</label>
          <input
            value={this.state.available}
            type="checkbox"
            name="available"
            onChange={this.handleChange}
            checked
          /> */}

          <button onClick={this.handleAddPlaceSubmit}> Add a place</button>
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
