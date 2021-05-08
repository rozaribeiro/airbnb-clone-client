// import logo from './logo.svg';
import React from "react";

// import Article from './pages/Article';
// import {Header} from './pages/partials/Header';
// import appContext from './store';
import "./App.css";
import "./assets/App.scss";
// import AddPlace from "./pages/AddPlace";
import AddPlace from "./pages/AddPlace";
import Homepage from "./pages/Homepage/index";
import SignUp from "./pages/Authenticate/SignUpPage"; // Inscription
import SignIn from "./pages/Authenticate/SignInPage"; // Connexion
import Bookings from "./pages/BookedList/";
import Navbar from "./components/Navbar/";
import Footer from "./components/Footer/";

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
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/places" component={AddPlace} />
          <Route exact path="/bookings" component={Bookings} />
          {/* ETQ touriste, je veux afficher la liste des réservations que j'ai faites [BookedList] */}
          {/* ETQ hôte, je veux afficher la liste des réservations de mes appartements ou de mes maisons que je propose à la location [BookedList] */}

          {/* <Route exact path="/signin" component={Authenticate} /> */}
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
export default App;
