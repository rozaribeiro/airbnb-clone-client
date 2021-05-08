import React from "react";

class BookingsListItem extends React.Component {
  render() {
    return <li>{this.props.booking_data}</li>;
  }
}

export default BookingsListItem;
