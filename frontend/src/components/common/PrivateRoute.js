import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import AuthenticationApi from "../../api/AuthenticationApi";
import {toast} from "react-toastify";

const PrivateRoute = ({component: Component, authType, ...rest}) => {

    const authHandler = () => {
        if (AuthenticationApi.getUserAuthentication() === authType)
            return <Component {...rest.props} />;
        else {
            toast.error("You are not authorized to view that page");
            return <Redirect to="/"/>
        }

    }

    return (

        <Route {...rest} render={() => authHandler()}/>
    );
};

export default PrivateRoute;