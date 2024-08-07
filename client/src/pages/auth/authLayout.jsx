import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {Forms, LayoutContainer} from "./form/Form.styled.js";

function AuthLayout() {
    const { currentUser } = useSelector((state) => state.user);

    const isAuthenticated = currentUser;
    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ):(
                <LayoutContainer>
                     <Forms>
                         <Outlet />
                         <h1>Img.....</h1>
                     </Forms>
                </LayoutContainer>
            )}
        </>
    );
}

export default AuthLayout;