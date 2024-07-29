import React from 'react';
import {Route, Routes} from "react-router-dom";
import AuthLayout from "../pages/auth/authLayout.jsx";
import Login from "../pages/auth/form/login/login.jsx";
import Register from "../pages/auth/form/register/register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import UserProfile from "../pages/UserProfile/UserProfile.jsx";
import CreateTask from "../pages/Task/create/create.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="user">
                    <Route path="profile" element={<UserProfile />} />
                </Route>

                <Route path="task">
                    <Route path="new" element={<CreateTask />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default AppRoutes;