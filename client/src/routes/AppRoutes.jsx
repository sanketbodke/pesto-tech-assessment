import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import AuthLayout from "../pages/auth/authLayout.jsx";
import Login from "../pages/auth/form/login/login.jsx";
import Register from "../pages/auth/form/register/register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import About from "../pages/About/About.jsx";
import UserProfile from "../pages/UserProfile/UserProfile.jsx";
import CreateTask from "../pages/Task/create/create.jsx";
import DisplayTask from "../pages/Task/Display/Display.jsx";
import UpdateTask from "../pages/Task/update/Update.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Navigate to="/tasks" replace />} />
                <Route path="about" element={<About />} />
                <Route path="user">
                    <Route path="profile" element={<UserProfile />} />
                </Route>

                <Route path="tasks">
                    <Route index element={<DisplayTask />} />
                    <Route path="new" element={<CreateTask />} />
                    <Route path=":id/update" element={<UpdateTask />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default AppRoutes;