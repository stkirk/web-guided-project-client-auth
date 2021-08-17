import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props)=> {
    return <Route {...props} render={()=> {
        return <div>Private Route</div>
    }}/>
}

export default PrivateRoute;