import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props)=> {
    console.log(props);
    <Route {...props} />
}

export default PrivateRoute;