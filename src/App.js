// import logo from './logo.svg';
import React from "react";
// import Article from './pages/Article';
// import {Header} from './pages/partials/Header';
// import appContext from './store';
import "./App.css";
import "./assets/App.scss";
import Homepage from "./pages/Homepage/index";
import SignUp from "./pages/Authenticate/SignUpPage"; // Inscription
import SignIn from "./pages/Authenticate/SignInPage"; // Connexion
// import Authenticate from "./pages/Authenticate/"; // Inscription

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

// const PrivateRoute = ({component: Component, ...rest}) => {
//   const store = React.useContext(appContext);
//   return (
//     <Route {...rest} render={(props) => (
//       store.isAuth
//       ? <Component {...props} />
//       : <Redirect to='/' />
//     )} />
//   );
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        {/* <Route exact path="/signin" component={Authenticate} /> */}
      </Switch>
    </Router>
  );
}
export default App;
