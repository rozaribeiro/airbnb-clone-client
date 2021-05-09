import React, { Component } from "react";
import appContext from "../../store";
import {bookingsService} from "../../services"

export default class index extends Component {
   
  static contextType = appContext;

  constructor(props) {
    super(props)
    
    this.state = {
        bookings: [],
        error: null
    };
}

async componentDidMount() {
    try {
        const response = await bookingsService.getBookedPlaces();
        this.setState({ bookings: response.data.bookings });
    } catch (e) {
        if (e.response.status === 403) {
            localStorage.removeItem('token');
            this.props.history.push('/');
            this.context.setAuth(false);
        }
        this.setState({ error: e.message });
    }
}
  render() {
    return (
      <appContext.Consumer>
        {(context) => (
          <div>
              {console.log(context)}
            <h1>Bookings List</h1>
          </div>
        )}
      </appContext.Consumer>
    );
  }
}