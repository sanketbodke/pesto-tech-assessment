import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

function AuthLayout() {
    const { currentUser } = useSelector((state) => state.user);

    const isAuthenticated = currentUser;
    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ):(
                <div>
                    <section>
                        <Outlet />
                    </section>
                    <h1>Img.....</h1>
                </div>
            )}
        </>
    );
}

export default AuthLayout;