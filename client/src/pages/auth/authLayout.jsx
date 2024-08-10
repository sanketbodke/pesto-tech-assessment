import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {Forms, LayoutContainer, LayoutImage} from "./form/Form.styled.js";
import {images} from "../../constant/index.js"

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
                         <LayoutImage
                            src={images.LayoutImg}
                            alt="Layout image"
                         />
                     </Forms>
                </LayoutContainer>
            )}
        </>
    );
}

export default AuthLayout;