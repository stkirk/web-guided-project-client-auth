import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props)=> {
    <Route {...props} />
}

export default PrivateRoute;