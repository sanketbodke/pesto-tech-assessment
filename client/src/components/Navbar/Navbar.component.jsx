import React from 'react';
import { Nav, Title, UserName } from "./Navbar.styled.jsx"
import useNavbar from "./useNavbar.js";

function NavbarComponent() {
    const {
        userName
    } = useNavbar()
    return (
        <Nav>
            <Title>JusCorpus</Title>
            <UserName>{userName}</UserName>
        </Nav>
    );
}

export default NavbarComponent;