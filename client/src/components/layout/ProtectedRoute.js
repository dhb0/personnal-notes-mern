import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route { ...rest } render={ props => (
            localStorage.getItem("token") ? 
            <Component {...props} /> : 
            <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
        ) }
        />
    );
};

export default ProtectedRoute;