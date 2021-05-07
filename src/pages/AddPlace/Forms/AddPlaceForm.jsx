import axios from "axios";
import React from "react";
// import {withRouter} from 'react-router-dom';

class AddPlaceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null,
      city_id: null,
      place_name: null,
      description: null,
      rooms: null,
      bathroons: null,
      max_guests: null,
      price_by_night: null,
      available: null,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log(this.name.value);
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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhMTExQGphZGUuZnIiLCJyb2xlIjoiaG9zdCIsImV4cCI6MTYyMDMyOTg2OCwiaWF0IjoxNjIwMzI2NDMzfQ.-09MrgXUjlRXscTh-kS8Oo_-7z0fGEfczlFh4HYnaeU";
    // get from localStorage when authenticated
    const api = axios.create({
      baseURL: `http://localhost:8000/`,
    });
    try {
      api
        .post(
          "api/places",
          {
            city_id: this.state.city_id,
            users_id: this.state.users_id,
            name: this.state.name,
            description: this.state.description,
            rooms: this.state.rooms,
            bathrooms: this.state.bathrooms,
            max_guests: this.state.max_guests,
            price_by_night: this.state.price_by_night,
            available: this.state.available,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
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
      console.log(e);
      // this.setState({error: e.response.data.error});
      // console.log(this.state.place_name);
    }
  }
  render() {
    return (
      <form action="POST">
        <ul>
          <label for="city_id">city_id</label>
          <input
            type="text"
            name="city_id"
            onChange={() => this.handleChange}
          />
          <label for="place_name">place_name</label>
          <input
            type="text"
            name="place_name"
            onChange={() => this.handleChange}
          />
          <label for="description">description</label>
          <input
            type="text"
            name="description"
            onChange={() => this.handleChange}
          />
          <label for="rooms">rooms</label>
          <input type="text" name="rooms" onChange={() => this.handleChange} />
          <label for="bathrooms">bathrooms</label>
          <input
            type="text"
            name="bathrooms"
            onChange={() => this.handleChange}
          />
          <label for="max_guests">max_guests</label>
          <input
            type="text"
            name="max_guests"
            onChange={() => this.handleChange}
          />
          <label for="price_by_night">price_by_night</label>
          <input
            type="text"
            name="price_by_night"
            onChange={() => this.handleChange}
          />
          <label for="available">available</label>
          <input
            type="text"
            name="available"
            onChange={() => this.handleChange}
          />

          <button onClick={() => this.handleAddPlaceSubmit}>
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
