import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import appContext from "../../../store";
import "./mobileNavbar.scss";

function MobileNavbar(props) {
  const store = React.useContext(appContext);

  const logOut = () => {
    localStorage.removeItem("token");
    store.setAuth(false);
    store.setUserInfos(null, null, null, null, null);
    props.history.push("/");
  };
  return (
    <nav className="mobileNavbar">
      <ul>
        {" "}
        {store.isAuth ? (
          <>
            <li>
              <Link to="/">Explore</Link>
            </li>
            <li>
              <Link to="/">Wishlists</Link>
            </li>
            <li>
              <Link to="/">Trips</Link>
            </li>
            <li>
              <Link to="/">Inbox</Link>
            </li>
            <li>
              <Link to="/">Profile</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/places">Explore</Link>
            </li>
            <li>
              <Link to="/">Wishlists</Link>
            </li>{" "}
            <li>
              <Link to="/signin">Log In</Link>
            </li>
          </>
        )}{" "}
      </ul>
    </nav>
  );
}

export default withRouter(MobileNavbar);
