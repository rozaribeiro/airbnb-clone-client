<<<<<<< HEAD
// import React from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
=======
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./footer.scss";
>>>>>>> 90ad430d7b47abf3215e3620b9836d4434135d3f

// class Footer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//     };
//   }

<<<<<<< HEAD
//   render() {
//     return (
//       <footer className="footer">
//         <Router>
//           <ul>
//             <li>
//               <Link
//                 to={{
//                   pathname: "/",
//                 }}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={{
//                   pathname: "/",
//                 }}
//               >
//                 Link 2
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={{
//                   pathname: "/",
//                 }}
//               >
//                 Link 3
//               </Link>
//             </li>
//           </ul>
//         </Router>
//       </footer>
//     );
//   }
// }
// export default Footer;
=======
  render() {
    return (
      <footer className="footer">
        <hr />
        {/* Footer not working yet */}
        <Router>
          <ul>
            <li>
              <Link
                to={{
                  pathname: "/",
                }}
              >
                Link 1
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/",
                }}
              >
                Link 2
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/",
                }}
              >
                Link 3
              </Link>
            </li>
          </ul>
          Made by xyz
        </Router>
      </footer>
    );
  }
}
export default Footer;
>>>>>>> 90ad430d7b47abf3215e3620b9836d4434135d3f
