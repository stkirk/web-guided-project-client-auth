import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component, ...rest})=> {
    return <Route {...props} render={()=> {
        return <div>Private Route</div>
    }}/>
}

export default PrivateRoute;