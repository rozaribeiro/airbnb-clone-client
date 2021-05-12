import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import appContext from "../../store";
import "../Navbar/navbar.scss";

// import {Link, withRouter} from 'react-router-dom';

function Navbar(props) {
  const store = React.useContext(appContext);

  const logOut = () => {
    localStorage.removeItem("token");
    store.setAuth(false);
    store.setUserInfos(null, null, null, null, null);
    props.history.push("/");
  };
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Airbnb</Link>
        </li>
        <li>
          <Link to="/">Places to stay</Link>
        </li>{" "}
        <li>
          <Link to="/">Experiences</Link>
        </li>
        <li>
          <Link to="/">Online Experiences</Link>
        </li>
      </ul>
      <ul className="navbar-user">
        {store.isAuth === true ? (
          <li>
            Welcome <b>{store.user}</b>! Role: <b>{store.role}</b> [dev] auth
            user ID: <b>{store.authUserId}</b>
          </li>
        ) : (
          "Welcome!"
        )}
        {!store.isAuth && (
          <>
            <li>
              <Link to="/signup">Become a host</Link>
            </li>
          </>
        )}{" "}
        {!store.isAuth && (
          <>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
          </>
        )}
        {store.isAuth && (
          <li>
            <Link onClick={logOut} to="/">
              Log out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default withRouter(Navbar);

// class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//     };
//   }
//   // NOT WORKING
//   redirectToHome() {
//     this.props.history.push("/");
//   }

//   redirectToSignIn() {
//     this.props.history.push("/signin");
//   }

//   redirectToSignUp() {
//     this.props.history.push("/signup");
//   }

//   render() {
//     return (
//       <nav className="navbar">
//         {/* <Router> */}
//         <ul>
//           <li>
//             <button onClick={this.redirectToHome}>Home</button>
//             {/* <Link to="/">Home</Link> */}
//           </li>
//           <li>
//             <button onClick={this.redirectToSignUp}>Sign Up</button>

//             {/* <Link to="/signup">Register</Link> */}
//           </li>
//           <li>
//             <button onClick={this.redirectToSignIn}>Sign In</button>
//             {/* <Link to="/signin">Log In</Link> */}
//           </li>
//         </ul>

//         {/* <Switch> */}
//         {/* <Route exact path="/"></Route> */}
//         {/* <Route path="/signup"></Route> */}
//         {/* <Route path="/signin"></Route> */}
//         {/* </Switch> */}
//         {/* </Router> */}
//       </nav>

//       //   <Router>
//       //   <nav>
//       //     <ul>
//       //       <li>
//       //         <Link to="/">Home</Link>
//       //       </li>
//       //       <li>
//       //         <Link to="/signup">Register</Link>
//       //       </li>
//       //       <li>
//       //         <Link to="/signin">Log In</Link>
//       //       </li>
//       //     </ul>

//       //     <Switch>
//       //       <Route exact path="/">
//       //         <Homepage />
//       //       </Route>
//       //       <Route path="/signup">
//       //         <About />
//       //       </Route>
//       //       <Route path="/dashboard">
//       //         <Dashboard />
//       //       </Route>
//       //     </Switch>
//       //   </nav>
//       // </Router>
//       // );
//     );
//   }
// }
// export default Navbar;
