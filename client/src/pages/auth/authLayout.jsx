import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

function AuthLayout() {
    const { currentUser } = false;

    const isAuthenticated = false;
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