import React, { Component } from "react";
import appContext from "../../store";
import {bookingsService} from "../../services"

export default class index extends Component {
   
  static contextType = appContext;

  constructor(props) {
    super(props)
    
    this.state = {
        data: [],
        error: null
    };
}

async componentDidMount() {
    try {
        const response = await bookingsService.bookPlaces();
        this.setState({ data: response.data });
        console.log("DATA BOOK PLACE",response.data);
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
            <h1>Book Place</h1>
          </div>
        )}
      </appContext.Consumer>
    );
  }
}