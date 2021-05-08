import React from "react";
import BookingsListItem from "./BookingsListItem";

class BookingsList extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <ul className="bookings-list">
        LIST =
        {this.props.data.map((booking, i) => (
          <BookingsListItem
            key={i}
            booking_data={""}
            // img={booking.img}
            // id={booking.id}
          />
        ))}
      </ul>
    );
  }
}

export default BookingsList;
