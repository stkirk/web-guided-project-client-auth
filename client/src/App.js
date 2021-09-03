import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//change branch
import Login from "./components/Login";
import Logout from "./components/Logout";
import GasPrices from "./components/GasPrices";
import PrivateRoute from "./components/PrivateRoute";

function App(props) {
  //STEP 7: create a way to logout
  const logout = () => {
    localStorage.removeItem("token");
  };

  // STEP 2: use Link, Switch, Route to route the App
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout} to="/">
              Logout
            </Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          {/* STEP 3: inject protected component into PrivateRoute component prop, use render if need to drill props into the component} */}
          <PrivateRoute exact path="/protected" component={GasPrices} />

          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
