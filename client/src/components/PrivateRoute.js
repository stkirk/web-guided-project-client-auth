import React from "react";
import { Redirect, Route } from "react-router-dom";

// STEP 1: Build PrivateRoute Component and export it
// PrivateRoute requirements:
// 1. Has the same API interface as <Route />
// 2. If an auth token exists, it renders a <Route /> and passes all props through
// 3. Otherwise, Redirect to login Route

//take the component prop, assign it Component (so that it will render in JSX) and assign the rest of the props to a variable called "rest" that spreads them out
const PrivateRoute = ({ component: Component, ...rest }) => {
  // rest would be props passed into the Route like 'exact' and 'path'
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        //if the token is in localStorage, render the component
        if (localStorage.getItem("token")) {
          console.log("token found rendering component");
          return <Component {...routeProps} />;
        }
        //Otherwise Redirect to login
        else {
          console.log("no token found, redirect to login");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
