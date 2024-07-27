import React from 'react';
import {Route, Routes} from "react-router-dom";
import authLayout from "../pages/auth/authLayout.jsx";
import Login from "../pages/auth/form/login/login.jsx";
import Register from "../pages/auth/form/register/register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Home from "../pages/Home/Home.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route Component={authLayout}>
                <Route path="auth/login" Component={Login}></Route>
                <Route path="auth/register" Component={Register}></Route>
            </Route>

            <Route Component={PrivateRoute}>
                <Route index Component={Home}></Route>
            </Route>
        </Routes>
    );
}

export default AppRoutes;