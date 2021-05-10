// import logo from './logo.svg';
import React from "react";

// import Article from './pages/Article';
// import {Header} from './pages/partials/Header';
import appContext from "./store";
import "./App.css";
import "./assets/App.scss";
// import AddPlace from "./pages/AddPlace";
import AddPlace from "./pages/AddPlace";
import Homepage from "./pages/Homepage/index";
import SignUp from "./pages/Authenticate/SignUpPage"; // Inscription
import SignIn from "./pages/Authenticate/SignInPage"; // Connexion
// import Bookings from "./pages/BookedList/";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/";

import PlacesAvailable from "./pages/PlacesList/index";
import BookedList from "./pages/BookedList"; //  GUEST List places booked
import BookPlace from "./pages/BookPlace"; // GUEST book place
import DeleteBooking from "./pages/DeleteBooking"; // GUEST delete booked place

// import Authenticate from "./pages/Authenticate/"; // Inscription

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link,
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const store = React.useContext(appContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        store.isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <PrivateRoute exact path="/places" component={AddPlace} /> {/* POST */}
        <Route exact path="/places/available" component={PlacesAvailable} />
        {/* <PrivateRoute exact path="/places" component={addPlace} /> {/* POST */}
        {/* <PrivateRoute exact path="/places" component={getPlacesCity} /> GET */}
        {/* <PrivateRoute exact path="/places/:place_id" component={getOnePlace} />  */}
        {/* <PrivateRoute exact path="/places/:placeId" component={modifyPlace} />  */}
        {/* <PrivateRoute exact path="/user/:user_id/places/:placeId" component={removePlace} />  */}
        <PrivateRoute exact path="/bookings" component={BookedList} />{" "}
        {/* GET */}
        <PrivateRoute exact path="/bookings" component={BookPlace} />{" "}
        {/* POST */}
        {/* <PrivateRoute exact path="/bookings/:id" component={DeleteBooking} /> GET */}
        {/* // P L A C E S   R O U T E S
        routers.post("/api/places", isAuth, Places.addPlace); // VINCENT corriger output
        routers.get("/api/places", isAuth, Places.getPlacesCity); // ROSA
        routers.get("/api/places/:place_id", isAuth, Places.getOnePlace); // ROSA + ROSA
        routers.patch("/api/places/:placeId", Places.modifyPlace); // REBECCA
        routers.delete("/api/user/:user_id/places/:placeId", isAuth, Places.removePlace); // REBECCA

        // B O O K I N G S   R O U T E S
        routers.get("/api/bookings", isAuth, Bookings.getBookedPlaces); // ROSA + VINCENT + VINCENT
        routers.get("/api/bookings/:id", isAuth, Bookings.deleteBookedPlace); // NAWAL
        routers.post("/api/bookings", isAuth, Bookings.postBookingsGuest); // NAWAL */}
        {/* <Route exact path="/signin" component={Authenticate} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

// <>
//   <Router>
//     <Navbar />
//     <Switch>
//       {/* <Route exact path="/" component={Homepage} /> */}
//       {/* <Route exact path="/signup" component={SignUp} /> */}
//       {/* <Route exact path="/signin" component={SignIn} /> */}
//       {/* <Route exact path="/places" component={AddPlace} /> */}
//       {/* <Route exact path="/bookings" component={Bookings} /> */}
//       {/* ETQ touriste, je veux afficher la liste des réservations que j'ai faites [BookedList] */}
//       {/* ETQ hôte, je veux afficher la liste des réservations de mes appartements ou de mes maisons que je propose à la location [BookedList] */}

//       {/* <Route exact path="/signin" component={Authenticate} /> */}
//     </Switch>
//   </Router>
//   <Footer />
// </>
