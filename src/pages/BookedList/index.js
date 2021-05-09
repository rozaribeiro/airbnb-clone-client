import React, { Component } from "react";
import appContext from "../../store";
import { bookingsService } from "../../services/";
// import BookingsListItem from "./BookingsListItem";

export default class index extends Component {
  static contextType = appContext;

  constructor(props) {
    super(props);

    this.state = {
      bookings: [],
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await bookingsService.getBookedPlaces();

      console.log(response);
      this.setState({ bookings: response.data.result });
    } catch (e) {
      if (e.response.status === 403) {
        localStorage.removeItem("token");
        this.props.history.push("/");
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
            {console.log(`context`, context)}
            {console.log(`context role`, context.role)}
            <h1>Bookings List (Page)</h1>

            {this.context.role === "host" ? <h2>Host booked places</h2> : null}
            {this.context.role === "host" // host view (need to refacto to page/component)
              ? this.state.bookings.map((booking, i) => (
                  <li key={i}>
                    {booking.name}
                    {booking.description}
                  </li>
                  // <BookingsListItem
                  //   key={i}
                  //   booking_data={this.props}
                  //   // img={booking.img}
                  //   // id={booking.id}
                  // />
                ))
              : null}
            {this.context.role === "guest" ? <h2>Guest bookings</h2> : null}
            {this.context.role === "guest"
              ? this.state.bookings.map((booking, i) => (
                  <li key={i}>
                    {booking.name}
                    {booking.description}
                  </li>
                ))
              : null}
          </div>
        )}
      </appContext.Consumer>
    );
  }
}

// import React from "react";
// // import {articleService} from '../../services';
// import { bookingsService } from "../../services";
// // import {ItemsList} from '../../components/Items';
// // import appContext from '../../stores';
// import BookingsList from "./BookingsList";

// class Bookings extends React.Component {
//   // static contextType = appContext;

//   constructor(props) {
//     super(props);

//     this.state = {
//       hostBookedPlaces: [1, 2, 3, 4, 5],
//       guestBookings: [6, 7, 8],
//       error: null,
//     };
//   }

//   async componentDidMount() {
//     // if (!this.context.isAuth) this.props.history.push("/");
//     let bypassIsAuth = true;
//     let role = "host";
//     if (!bypassIsAuth);
//     else {
//       try {
//         if (role === "host") {
//           const response = await bookingsService.getPlacesBookingsOfHost();
//           console.log(response);
//           //   this.setState({ hostBookedPlaces: response.data.bookings }); // FIX WHEN API IS AVAILABLE
//           console.log(response);
//         } else if (role === "guest") {
//           const response = await bookingsService.getBookingsMadeByGuest();
//           //   this.setState({ hostBookedPlaces: response.data.bookings });
//           console.log(response);
//         } else {
//           console.log("error");
//         }

//         // this.setState({articles: response.data.bookings});
//       } catch (e) {
//         this.setState({ error: e.message });
//       }
//     }
//   }

//   render() {
//     const hostBookedPlaces = this.state.hostBookedPlaces;
//     return (
//       // <appContext.Consumer>
//       // {(context) => (
//       <>
//         {this.state.error && <p>{this.state.error}</p>}
//         <h1>Bookings (Host booked places / Guest bookings)</h1>
//         {/* {console.log(context)} */}

//         <BookingsList data={hostBookedPlaces} />
//       </>
//       // )}
//       // </appContext.Consumer>
//     );
//   }
// }

// export default Bookings;
