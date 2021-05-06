// import logo from './logo.svg';
import React from 'react';
// import Article from './pages/Article';
// import {Header} from './pages/partials/Header';
// import appContext from './store';
import './App.css';
import './assets/App.scss';
import Homepage from './pages/Homepage/index'
import SignIn from './pages/Authenticate/Form/SignInForm'; // Connexion
import SignUp from './pages/Authenticate/Form/SignUpForm'; // Inscription

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
function App() {
  return (
    <Router>
     <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
  </Switch>
  </Router>
 
  );
}

export default App;


