import React from 'react'
import { Redirect, Switch, Route } from "react-router-dom";
import {shallowEqual, useSelector } from "react-redux";
import AuthPage  from "modules/Auth/pages/AuthPage";
import AdminMainLayout from "layouts/AdminMainLayout"
import Client from "layouts/Client"
import {PrivateRoute} from "modules/components/PrivateRoute"
import {AdminRoutes} from "pages/AdminRoutes"
export default function MainRoutes() {
    

   

    return (

        <Switch>
            <PrivateRoute component = {AdminMainLayout}  path="/admin" />
            <Route component={Client} path="/" />
        </Switch>
        
    )
}
