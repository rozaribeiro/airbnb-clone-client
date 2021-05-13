import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./footer.scss";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

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
