// import React from "react";
// export default class SignInModal extends React.Component {
//   state = {
//     show: false,
//   };
//   showModal = (e) => {
//     this.setState({
//       show: true,
//     });
//   };

//   render() {
//     if (!this.props.show) {
//       return null;
//     }
//     return (
//       <div>
//         {this.props.children}
//       </div>
//     );
//   }
// }
// WIP
import React from "react";
// import "./modal.css";
export default class SignInModal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal">
        <h2>Modal Window</h2>
        <div class="content">{this.props.children}</div>
        <div class="actions">
          <button class="toggle-button" onClick={this.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
