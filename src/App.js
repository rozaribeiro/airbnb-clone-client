// import "./App.css";

import { Router, Route, Switch } from "react";
// import AddPlace from "./pages/AddPlace/index";
import AddPlace from "./pages/AddPlace";
// import AddPlace from "../src/pages/AddPlace/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={AddPlace} />
          {/* <Route exact path="/add-place" component={AddPlace} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
